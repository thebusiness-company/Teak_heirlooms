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
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#9C0300] mb-2">
        Order confirmed!
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Thank you for your purchase. Your has been received and it`&apos;`s been processed.
      </p>

      <div className="grid md:grid-cols-2 gap-6 pb-6">
        {/* Order Details */}
        <div className="border-r  border-gray-600">
          <h2 className="text-lg font-semibold mb-4">Order Details</h2>
          <ul className="space-y-1 text-gray-700">
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
        <div>
          <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
          <ul className="space-y-1 text-gray-700">
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
        <h2 className="text-lg font-semibold mb-4">Ordered Items</h2>
        <div className="border-dashed border rounded-md overflow-hidden">
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
                  <p className="text-red-500 text-sm">Rs.{item.product.price}</p>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Qty: {item.quantity} × Rs.{item.product.price} = Rs.
                {item.quantity * item.product.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 border-t pt-4 text-right text-gray-700">
        <p className="text-base">
          <span className="font-medium">Sub total:</span> Rs.
          {order.total_amount - 500}
        </p>
        <p className="text-base">
          <span className="font-medium">Shipping:</span> Rs.500.00
        </p>
        <p className="text-lg font-bold">
          <span className="font-medium">Total:</span> Rs.{order.total_amount}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          to="/"
          className="text-center text-[#9C0300] px-6 py-3 bg-[#FFF1DF] hover:bg-gray-300 rounded-md"
        >
          Continue Shopping
        </Link>
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
