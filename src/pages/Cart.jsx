import { useEffect, useState, useCallback, useMemo } from "react";
import api, { API_URL } from "../api";
import { loadScript } from "../utils/razorpay";
import AddressForm from "../components/order/AddressForm";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext";

const Cart = () => {
  const { showSuccess, showError } = useToast();
  const cart_code = localStorage.getItem("cart_code");
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(500); // Updated
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [userAddresses, setUserAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const navigate = useNavigate();

  const total = useMemo(() => subtotal + shippingCost, [subtotal, shippingCost]);

  const calculateSubtotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setSubtotal(total);
  };

  const fetchCart = useCallback(async () => {
    try {
      const response = await api.get(`/get_cart?cart_code=${cart_code}`);
      setCartItems(response.data.items);
      calculateSubtotal(response.data.items);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }, [cart_code]);

  const fetchUserAddresses = useCallback(async () => {
    try {
      const response = await api.get("get_user_addresses/");
      setUserAddresses(response.data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  }, []);
  const handleDeleteAddress = async (id) => {
    try {
      await api.delete("delete_user_address/", {
        data: { id }, // Axios allows sending data in DELETE this way
      });
      showSuccess("Address deleted successfully");
      fetchUserAddresses(); // refresh list
    } catch (error) {
      console.error("Error deleting address:", error);
      showError("Failed to delete address");
    }
  };

  useEffect(() => {
    if (cart_code) {
      fetchCart();
      fetchUserAddresses();
    }
  }, [cart_code, fetchCart, fetchUserAddresses]);

  const updateQuantity = async (id, newQty) => {
    if (newQty < 1) return;

    try {
      await api.patch("update_quantity/", {
        item_id: id,
        quantity: newQty,
      });
      fetchCart();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await api.delete("delete_cartitem/", {
        data: { item_id: id },
      });
      fetchCart();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleProceedToCheckout = () => {
    setShowAddressForm(true);
  };

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsNewAddress(false);
    handleAddressSubmit(address);
  };

  const handleNewAddress = () => {
    setSelectedAddress(null);
    setIsNewAddress(true);
  };

  const handleAddressSubmit = async (addressData) => {
    try {
      setIsProcessingPayment(true);
      if (!isNewAddress && selectedAddress) {
        await processPayment(selectedAddress);
        return;
      }
      await processPayment(addressData);
    } catch (error) {
      console.error("Error processing payment:", error);
      showError("Payment failed. Please try again.");
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const processPayment = async (addressData) => {
    try {
      const totalAmount = total * 100;

      const orderResponse = await api.post("create_order/", {
        cart_code,
        amount: totalAmount,
      });

      const options = {
        key: orderResponse.data.razorpay_key,
        amount: orderResponse.data.amount,
        currency: orderResponse.data.currency,
        name: orderResponse.data.name,
        description: orderResponse.data.description,
        order_id: orderResponse.data.order_id,
        handler: async function (response) {
          try {
            const verificationResponse = await api.post("verify_payment/", {
              cart_code,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              address: addressData,
            });

            localStorage.removeItem("cart_code");
            navigate(`/order-confirmation/${verificationResponse.data.order_id}`);
          } catch (error) {
            console.error("Payment verification failed:", error);
            showError("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: addressData.first_name + " " + addressData.last_name,
          email: addressData.email,
          contact: addressData.phone,
        },
        notes: {
          address: `${addressData.address_line1}, ${addressData.city}`,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: async function () {
            try {
              await api.post("/cancel_payment/", {
                cart_code,
                razorpay_order_id: orderResponse.data.order_id,
              });
            } catch (error) {
              console.error("Failed to cancel order:", error);
            }
            showError("Payment was not completed. You can try again.");
          },
        },
      };

      const razorpayScriptLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!razorpayScriptLoaded) {
        showError("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        showError(`Payment failed: ${response.error.description}`);
      });
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      showError("Error initiating payment. Please try again.");
    }
  };

  // ✅ Early return if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg">Your cart is empty</p>
        <a href="/" className="text-blue-500 mt-4 inline-block">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto md:mx-4 lg:mx-auto rounded-3xl shadow-[0px_4px_4px_0px_#00000040] border-[black]/25 border-b-12 border-r-12 md:flex my-16">
      {/* Left: Cart Items */}
      <div className="flex-1 bg-[#EDEAE5] p-4 rounded-2xl md:rounded-r-none md:rounded-l-2xl lg:pb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-3xl text-[#3B493F] lg:pt-6 lg:pl-8">Shopping Cart</h2>
          <span className="lg:pt-8">{cartItems.length} Items</span>
        </div>
        <hr />
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border-b py-4 px-2 md:px-4 lg:pl-8">
            <img
              src={
                item.product.images[0]?.image
                  ? `${API_URL}${item.product.images[0].image}`
                  : "/placeholder.jpg"
              }
              alt={item.product.name}
              className="w-14 h-16  md:w-24 md:h-24 object-cover"
            />
            <div className="flex items-center ml-2 md:ml-8">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 text-[#9C0300] text-2xl"
              >
                -
              </button>
              <span className="px-2 md:px-4 border">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 text-[#9C0300] text-2xl"
              >
                +
              </button>
            </div>
            <div className="flex-1 ml-2 md:ml-8">
              <p className="font-medium text-sm md:text-base ">{item.product.name}</p>
              <p className="text-gray-500">Rs.{item.product.price}</p>
            </div>
            <button onClick={() => deleteItem(item.id)} className="text-[#9C0300] px-2 md:px-4 lg:px-6">
              ✖
            </button>
          </div>
        ))}
      </div>

      {/* Right: Summary */}
      <div className="w-full md:w-1/3 bg-[#F5F5F5] p-4 mt-6 md:mt-0 rounded-2xl md:rounded-l-none md:rounded-r-2xl lg:pb-12">
        <h3 className="text-lg text-[#3B493F] font-semibold mb-4 lg:mt-8">Summary</h3>
        <hr />
        <div className="flex justify-between mt-2">
          <span>ITEMS: {cartItems.length}</span>
          <span>Rs.{subtotal}</span>
        </div>
        <div className="mt-6">
          <span>SHIPPING</span>
          <select
            className="w-full p-2 border rounded mt-2 mb-16 bg-[#3B493F] text-white"
            value={shippingCost}
            onChange={(e) => setShippingCost(Number(e.target.value))}
          >
            <option value={500}>Standard Delivery - Rs.500</option>
            <option value={1000}>Express Delivery - Rs.1000</option>
          </select>
        </div>
        <hr />
        <div className="flex justify-between mt-10">
          <div>
            <span>TOTAL PRICE</span><br />
            <span className="text-xs text-[#9C0300]">Incl of gst</span>
          </div>
          <span>Rs.{total}</span>
        </div>

        {showAddressForm ? (
          <AddressForm
            userAddresses={userAddresses}
            onAddressSelect={handleAddressSelect}
            onNewAddress={handleNewAddress}
            onSubmit={handleAddressSubmit}
            selectedAddress={selectedAddress}
            isNewAddress={isNewAddress}
            isProcessing={isProcessingPayment}
            handleDeleteAddress={handleDeleteAddress}
          />
        ) : (
          <button
            onClick={handleProceedToCheckout}
            className="w-full mt-16 p-2 text-white rounded bg-[#3B493F] cursor-pointer "
          >
            Check Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
