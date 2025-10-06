import React from 'react';
import { useEffect } from 'react';

const ShippingandDelivery = () => {
  
  useEffect(() => {
  window.scrollTo({top:0, behavior:"smooth"});
  }, []);
  
  return (
    <>
      <div className="bg-[#FFFFFF] px-6 md:px-8 lg:px-16">
        <section className="space-y-6">
          <h2 className="text-[#3B493F] text-2xl md:text-3xl font-infant text-center pt-6 ">
            Shipping
          </h2>
          <div className="space-y-4">
            <p className="font-semibold">We ship products across India.</p>
            <p>
              Teakheirlooms guarantees to deliver your product safely and in the
              best of condition within a maximum of 12 working days.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">Track Orders</p>
            <p>
              Once an order is placed, a verification e-mail is sent to the
              customer’s e-mail id with the tracking details. Whenever at any
              time a customer wishes to know the status of the order to track
              the delivery, instead of he/she can easily log on to the website
              and check the status using the tracking details.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">International Shipments</p>
            <p>
              Teakheirlooms.com do not undertakes internationally shipments.
            </p>
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-[#3B493F] text-2xl md:text-3xl font-infant text-center pt-6 ">
            Delivery
          </h2>
          <h3 className="text-lg md:text-xl ">FAQ</h3>
          <div className="space-y-4">
            <p className="font-semibold">
              What is the estimated delivery time?
            </p>
            <p>
              Products are typically dispatched within 1-6 days of order
              confirmation depending on Your destination. Once the product is
              dispatched for delivery we will notify you of the same.
            </p>
            <p>
              All the products are transported and delivered using the
              Teakheirlooms or its partner delivery network.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">What is the shipping charges ?</p>
            <p>
              We charge for shipments and its depends on the weight of the
              product and delivery location. When you provide the pincode in the
              delivery location, system will show the calculated shipping
              charges for your order.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">How to track my order ?</p>
            <p>
              Whenever at any time a customer wishes to know the status of the
              order to track the delivery, instead of he/she can easily log on
              to the website and check the status using the tracking details.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">How do I cancel the order ?</p>
            <p>
              The cancellation of order prior to delivery is allowed. You can
              easily log on to the website and select the reason for
              cancellation and submit the reuest. You will receive order
              cancellation confirmation email.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">
              Can I visit the your store inperson ?
            </p>
            <p>
              Yes, you are always welcome to our shop at Chennai location to
              explore our products.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">how to reach customer care ?</p>
            <p>
              You can reach customer care through phone  
              <a  href="tel:+91 7339574747" aria-label="Call to Teak Heirlooms Contact Number" className='underline lg:no-underline lg:hover:underline'> +91 7339574747, </a> email at
              <a  href="mailto:info@teakheirlooms.com"  aria-label="Send an email to Teak Heirlooms" className='underline lg:no-underline lg:hover:underline'> info@teakheirlooms.com.</a>  Also you can visit our store at Chennai location.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default ShippingandDelivery;