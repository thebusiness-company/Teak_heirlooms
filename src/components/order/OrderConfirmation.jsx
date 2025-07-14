import { useEffect, useState } from "react";
import api, { API_URL } from "../../api";
import { useParams, Link } from "react-router-dom";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await api.get(`orders/${orderId}`);
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      
        // ✅ Inject mock data only for testing
        setOrder({
          razorpay_order_id: orderId,
          created_at: new Date().toISOString(),
          total_amount: 2499,
          payment_status: "paid",
          address: {
            first_name: "John",
            last_name: "Doe",
            address_line1: "123 Main Street",
            address_line2: "",
            city: "Testville",
            state: "Test State",
            postal_code: "123456",
            country: "India",
            phone: "9876543210",
            email: "john@example.com",
          },
          cart: {
            items: [
              {
                id: 1,
                quantity: 2,
                product: {
                  name: "Sample Product 1",
                  price: 999,
                  images: [{ image: "/placeholder.jpg" }],
                },
              },
              {
                id: 2,
                quantity: 1,
                product: {
                  name: "Sample Product 2",
                  price: 501,
                  images: [{ image: "/placeholder.jpg" }],
                },
              },
            ],
          },
        });
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!order) return <div className="text-center py-8">Order not found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl lg:text-5xl text-center font-semibold text-[#9C0300] mb-2 font-infant">
        Order confirmed!
      </h1>
      <p className="text-center mb-8 md:mb-12">
        Thank you for your purchase. Your order has been received and it's been processed.
      </p>

      <div className="grid md:grid-cols-2 gap-6 pb-6 ">
        {/* Order Details */}
        <div className="border-b md:border-b-0 md:border-r border-[#9C0300] mx-4 md:mx-0  md:place-items-center text-left">
          <h2 className="text-lg font-semibold mb-4 ">Order Details</h2>
          <ul className="space-y-1 text-[#3B493F] mb-4">
            <li>
              <span className="font-medium">Order ID:</span> {order.razorpay_order_id}
            </li>
            <li>
              <span className="font-medium">Date:</span>{" "}
              {new Date(order.created_at).toLocaleDateString()}
            </li>
            <li>
              <span className="font-medium">Order value:</span> Rs.{order.total_amount}
            </li>
            <li>
              <span className="font-medium">Payment status:</span>{" "}
              {order.payment_status}
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className=" mx-4 md:mx-0  md:place-items-center text-left">
          <h2 className="text-lg font-semibold mb-4 ">Delivery Address</h2>
          <ul className="space-y-1 text-[#3B493F]">
            <li>
              {order.address.first_name} {order.address.last_name}
            </li>
            <li>{order.address.address_line1}</li>
            {order.address.address_line2 && <li>{order.address.address_line2}</li>}
            <li>
              {order.address.city}, {order.address.state} - {order.address.postal_code}
            </li>
            <li>{order.address.country}</li>
            <li>Phone: {order.address.phone}</li>
            <li>Email: {order.address.email}</li>
          </ul>
        </div>
      </div>

      {/* Ordered Items */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4 ml-4">Ordered Items</h2>
        <div className="border-dashed border rounded-xl overflow-hidden">
          {order.cart.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-b last:border-b-0"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={
                    item.product.images[0]?.image
                      ? `${API_URL}${item.product.images[0].image}`
                      : "/placeholder.jpg"
                  }
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-[#9C0300] text-sm">Rs.{item.product.price}</p>
                </div>
              </div>
              <div className="text-sm font-bold md:mr-6 text-left">
                Qty: {item.quantity} × Rs.{item.product.price} = Rs.
                {item.quantity * item.product.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 border-t border-[#9C0300] pt-4 text-center md:text-right ">
        <p className="text-base text-[#3B493F] md:mr-6">
          <span className="font-medium">Sub total:</span> Rs.
          {order.total_amount - 500}
        </p>
        <p className="text-base text-[#3B493F] md:mr-6">
          <span className="font-medium">Shipping:</span> Rs.500.00
        </p>
        <p className="text-lg font-bold md:mr-6">
          <span className="font-medium">Total:</span> Rs.{order.total_amount}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/"
          className="text-center px-6 py-3 bg-[#FFF1DF] hover:bg-gray-300 rounded-md"
        >
          Continue Shopping
        </Link>
        </div>
        <div className="mt-6 md:mt-0 flex flex-col sm:flex-row justify-end gap-4 md:mr-6">
        <Link
          to="/"
          className="text-center px-6 py-3 bg-[#9C0300] hover:bg-red-700 text-white rounded-md"
        >
          Track order
        </Link>
        </div>
    </div>
  );
};

export default OrderConfirmation;
