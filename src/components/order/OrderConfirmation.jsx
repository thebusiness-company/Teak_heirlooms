import { useEffect, useState } from "react";
import api from "../../api";
import { API_URL } from "../../api";
import { useParams,Link } from "react-router-dom";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-green-600 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been received and is being
            processed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Order ID:</span> {order.razorpay_order_id}
              </p>
              <p>
                <span className="font-medium">Date:</span>{" "}
                {new Date(order.created_at).toLocaleDateString()}
              </p>
              <p>
                <span className="font-medium">Total:</span> Rs.{order.total_amount}
              </p>
              <p>
                <span className="font-medium">Payment Status:</span>{" "}
                <span className="capitalize">{order.payment_status}</span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
            <div className="space-y-2">
              <p>
                {order.address.first_name} {order.address.last_name}
              </p>
              <p>{order.address.address_line1}</p>
              {order.address.address_line2 && <p>{order.address.address_line2}</p>}
              <p>
                {order.address.city}, {order.address.state} -{" "}
                {order.address.postal_code}
              </p>
              <p>{order.address.country}</p>
              <p>Phone: {order.address.phone}</p>
              <p>Email: {order.address.email}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Order Items</h2>
          <div className="border rounded-lg overflow-hidden">
            {order.cart.items.map((item) => (
              <div
                key={item.id}
                className="p-4 border-b last:border-b-0 flex items-center"
              >
                <img
                  src={
                    item.product.images[0]?.image
                      ? `${API_URL}${item.product.images[0].image}`
                      : "/placeholder.jpg"
                  }
                  alt={item.product.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-gray-600">Rs.{item.product.price}</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    Qty: {item.quantity} × Rs.{item.product.price} = Rs.
                    {item.quantity * item.product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-right">
          <p className="text-lg">
            <span className="font-medium">Subtotal:</span> Rs.
            {order.total_amount - 500}
          </p>
          <p className="text-lg">
            <span className="font-medium">Shipping:</span> Rs.500
          </p>
          <p className="text-xl font-bold">
            <span className="font-medium">Total:</span> Rs.{order.total_amount}
          </p>
        </div>

        <div className="flex mt-8 text-center justify-between">
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Continue Shopping
          </Link>
          <Link
          to="/"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Track Order
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default OrderConfirmation;