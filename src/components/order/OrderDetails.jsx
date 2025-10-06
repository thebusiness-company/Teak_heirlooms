import React from 'react';
import { useState, useEffect } from 'react';
import api,{ API_URL } from '../../api';
import rzpay from "../../assets/images/razorpay.png"

const OrderDetails = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
           try {
            const response = await api.get("user/orders/");
            setOrders(response.data);
           } catch (error) {
            console.error("API Error for Orders: ", error.response?.data);
            setError(error.response?.data?.error);
           } finally {
            setLoading(false);
           }
        };

        fetchOrders();
    }, []);
    console.log("Orders: ", orders);
    

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const deliveredOrders = orders?.filter(
      (ord) => ord.status?.toLowerCase() === "delivered"
    );
    console.log("deliveredOrders: ", deliveredOrders);
    

  return (
    <>
      <div className="bg-[#FFFFFF] px-4 md:px-6">
        {deliveredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-10 min-h-screen">
            <p className="text-sm md:text-base text-[#9C0300]">
              No orders found.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl lg:text-3xl text-[#9C0300] font-bold font-infant text-center pt-8 lg:text-right w-full max-w-6xl lg:mr-28 md:mb-8">
              My Order Details
            </h1>
            {/* <pre>{JSON.stringify(deliveredOrders, null, 2)}</pre> */}

            {/* Looping through all orders & formatting ord.created_at into date */}
            {deliveredOrders.map((ord, idx) => {
              const formattedDate = new Date(ord.created_at).toLocaleDateString(
                "en-GB",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }
              );

              const totalValue = parseFloat(ord.total_amount).toFixed(2);
              const orderId = ord.id || "-"; // Fallback to "-" if id is not available

              return (
                <React.Fragment key={ord.id || idx}>
                  {/* Desktop View */}
                  <div className="hidden md:block mb-10 pb-6">
                    {/* Order Summary For Each order */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-16 p-4 text-sm mb-8 md:pl-16 md:mb-10 bg-[#FFF1DF] text-center md:px-6 lg:px-10">
                      <div>
                        <p className="text-sm">Order Placed</p>
                        <p className="text-base">{formattedDate}</p>
                      </div>
                      <div>
                        <p className="text-sm">Total Value</p>
                        <p className="text-base">₹ {totalValue}</p>
                      </div>
                      <div>
                        <p className="text-sm">Shipped to </p>
                        <p className="text-base">
                          {ord.address
                            ? `${ord.address.first_name || ""} ${
                                ord.address.last_name || ""
                              }`.trim()
                            : "-"}
                        </p>
                      </div>
                      <div className="md:pl-24">
                        <p className="text-sm">Order Id</p>
                        <p className="text-base"># {orderId}</p>
                      </div>
                    </div>

                    {/* Product Loop for this order */}
                    {ord.cart?.items?.map((item, index) => (
                      <div
                        key={item.id || index}
                        className="flex md:flex-row gap-4 p-4 mb-8 lg:justify-center lg:items-center lg:pl-16 border-l border-r border-[#9C0300]"
                      >
                        {/* Product Image */}
                        <img
                          src={`${API_URL}${item.product.images[0]?.image}`}
                          alt="Order Image"
                          className="w-28 h-auto object-cover md:mx-0 "
                        />

                        {/* Product Details */}
                        <div className="flex-1 md:text-left gap-4 md:pl-16 lg:pl-16">
                          <h1 className="font-semibold">{item.product.name}</h1>
                          <p className="text-sm mt-1 font-tenor">
                            Size | Qty purchased {item.quantity}
                          </p>
                        </div>

                        <div className="text-sm md:text-right lg:text-left space-y-1 lg:pr-16 lg:border-l border-[#9C0300] lg:pl-20">
                          <p className="font-tenor">Delivered</p>
                          <p className="font-tenor">{ord.status}</p>
                          <div className="flex md:justify-end items-center gap-3 space-y-1 lg:text-left mt-6 md:mt-12">
                            <p className="font-tenor">Payment Methods </p>
                            <img
                              src={rzpay}
                              alt="RazorPay"
                              className="h-4 md:h-4 lg:h-6 mb-1 lg:mb-2"
                            />
                          </div>
                          <div className="md:justify-end items-center gap-2 space-y-1 lg:text-left">
                            <p className="font-tenor">Card ending with xxxx</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile View */}
                  <div className="block md:hidden mb-8 px-4 py-6 overflow-x-hidden max-w-full border-b border-[#9C0300] ">
                    {/* Order Summary For Each order */}
                    <div className="grid grid-cols-3 text-sm text-center justify-center items-center gap-x-4 p-4 mb-4 bg-[#FFF1DF]">
                      <div className="justify-center items-start">
                        <p>Order Placed</p>
                        <p>{formattedDate}</p>
                      </div>
                      <div className="justify-center items-start ">
                        <p className=" ">Total Value</p>
                        <p>₹ {totalValue}</p>
                      </div>
                      <div className="justify-center items-start ">
                        <p className=" ">Order Id</p>
                        <p> {orderId}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 mb-4 text-base py-4 space-y-2 justify-center items-start">
                      <p>Shipped to </p>
                      <p>
                        <strong>
                          {ord.address
                            ? `${ord.address.first_name || ""} ${
                                ord.address.last_name || ""
                              }`.trim()
                            : "-"}
                        </strong>
                      </p>
                    </div>

                    {/* Product Loop for this order */}
                    {ord.cart?.items?.map((item, index) => (
                      <div key={item.id || index} className="mb-6 p-4">
                        {/* Product Details */}
                        <div className="grid grid-cols-2 justify-center items-center gap-2">
                          {/* Product Image */}
                          <img
                            src={`${API_URL}${item.product.images[0]?.image}`}
                            alt="Order Image"
                            className="w-28 h-auto items-start "
                          />
                          <div className="">
                            <p className="text-base font-semibold">
                              {item.product.name}
                            </p>
                            <p className="text-sm mt-1">
                              Size | Qty {item.quantity}
                            </p>
                            <p className="text-sm mt-4">Delivered</p>
                            <p className="text-sm mb-2">{ord.status}</p>
                          </div>
                        </div>
                        <div className="flex text-sm justify-start items-start space-y-1 mt-6 space-x-4 mb-2">
                          <p>Payment Methods </p>
                          <img
                            src={rzpay}
                            alt="RazorPay"
                            className="h-6 pb-1"
                          />
                        </div>
                        <div className="flex text-sm justify-start items-start">
                          <p>Card ending with xxxx</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default OrderDetails;
