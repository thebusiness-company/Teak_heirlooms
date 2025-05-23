// src/pages/OrderAddressPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressForm from "./AddressForm";
import api from "../../api";
import { useToast } from "../../context/ToastContext";

const OrderAddressPage = () => {
  const { showSuccess, showError } = useToast();
  const cart_code = localStorage.getItem("cart_code");
  const [userAddresses, setUserAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [total, setTotal] = useState(0);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const response = await api.get(`/get_cart?cart_code=${cart_code}`);
      const subtotal = response.data.items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
      setTotal(subtotal + 500); // assuming flat 500 shipping
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const fetchUserAddresses = async () => {
    try {
      const response = await api.get("get_user_addresses/");
      setUserAddresses(response.data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchUserAddresses();
  }, []);

  const handleDeleteAddress = async (id) => {
    try {
      await api.delete("delete_user_address/", {
        data: { id },
      });
      showSuccess("Address deleted successfully");
      fetchUserAddresses();
    } catch (error) {
      console.error("Error deleting address:", error);
      showError("Failed to delete address");
    }
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

      const totalAmount = total * 100;

      const orderResponse = await api.post("create_order/", {
        cart_code,
        amount: totalAmount,
      });

      const loadScript = (src) =>
        new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });

      const scriptLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!scriptLoaded) {
        showError("Razorpay SDK failed to load.");
        return;
      }

      const options = {
        key: orderResponse.data.razorpay_key,
        amount: orderResponse.data.amount,
        currency: orderResponse.data.currency,
        name: orderResponse.data.name,
        description: orderResponse.data.description,
        order_id: orderResponse.data.order_id,
        handler: async function (response) {
          try {
            const verification = await api.post("verify_payment/", {
              cart_code,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              address: addressData,
            });
            localStorage.removeItem("cart_code");
            navigate(`/order-confirmation/${verification.data.order_id}`);
          } catch (error) {
            console.error("Verification failed", error);
            showError("Payment verification failed.");
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
        theme: { color: "#3399cc" },
        modal: {
          ondismiss: async function () {
            await api.post("/cancel_payment/", {
              cart_code,
              razorpay_order_id: orderResponse.data.order_id,
            });
            showError("Payment was cancelled.");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error during payment:", error);
      showError("Something went wrong. Please try again.");
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">Select or Add Delivery Address</h2>
      <AddressForm
        userAddresses={userAddresses}
        onAddressSelect={handleAddressSelect}
        onNewAddress={handleNewAddress}
        onSubmit={handleAddressSubmit}
        selectedAddress={selectedAddress}
        isNewAddress={isNewAddress}
        handleDeleteAddress={handleDeleteAddress}
      />
    </div>
  );
};

export default OrderAddressPage;
