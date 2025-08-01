import React, { useEffect } from 'react';
import map from '../assets/images/maptracking.png';
import os1 from '../assets/images/OS-1.png';
import os2 from '../assets/images/OS-2.png';
import os3 from '../assets/images/OS-3.png';
import packageLogo from '../assets/images/package.png';


const OrderStatus = () => {

    useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
    })
  return (
    <>
      <div className="min-h-screen bg-[#FFF1DF] overflow-x-hidden">
        <div className="mx-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase font-semibold text-center mt-12">
            Order Status
          </h1>
          <p className="mt-4 text-center">
            Enter the necessary details below to view, track, and manage your
            order as a guest or as an account holder.
          </p>
          <div className="w-full max-w-md mx-auto ">
            <input
              type="text"
              placeholder="Tracking Id"
              className="mt-4 border border-[#9C0300] rounded-md w-full p-2"
            />
            <div className="flex justify-end mt-4">
              <button className="bg-[#9C0300] text-white px-8 py-1 rounded-md">
                Track
              </button>
            </div>
          </div>
          <div className='w-full max-w-4xl mx-auto '>
            <p className="my-6">Recently Shipped</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md mb-6 w-full max-w-5xl mx-auto">
            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-row items-center gap-2">
                <img src={packageLogo} alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
                <p>Your Package</p>
              </div>
              <span className="px-3 py-1 bg-[#9C0300] rounded-md text-white">
                Shipped
              </span>
            </div>
            <div className="flex justify-between items-center mt-6 px-4 lg:px-12">
              <div>
                <p className="text-xs text-[#9C0300]">Order Number</p>
                <p className="text-sm mt-1">#1895133166666221</p>
              </div>
              <div>
                <p className="text-xs text-[#9C0300]">Estimate Delivery</p>
                <p className="text-sm mt-1">30.05.2024</p>
              </div>
            </div>
            <div className="mt-4 max-w-[904px] px-2 md:px-6 lg:px-10 mx-auto">
              {" "}
              {/*replace with actual tracking info */}
              <img
                src={map}
                alt="map image"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="mt-10 mb-6 flex items-start justify-between gap-4 mx-2 md:mx-4 lg:mx-10">
              <div className="w-1/3">
                <div className="flex flex-col gap-6">
                  <div className="relative flex items-center gap-4">
                    <div className="relative w-3 h-3 rounded-full border-8 border-[#9C0300] z-20">
                      <div className="absolute top-[-3.5px] right-[-3.5px] w-2 h-2 rounded-full bg-white z-30"></div>
                      <div className="absolute top-0 right-0 h-full min-h-36 w-0.5 bg-[#9C0300] z-10"></div>
                    </div>
                    <div>
                      <p className="text-[#9C0300] text-sm mb-2">Pickup</p>
                      <p className="text-sm">ECR, Chennai Hub,</p>
                      <p className="text-sm">Pin : 600091</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-3 h-3 rounded-full border-8 border-[#1877F2] z-20">
                      <div className="absolute top-[-3.5px] right-[-3.5px] w-2 h-2 rounded-full bg-white z-30"></div>
                      <div className="absolute top-0 right-0 h-full min-h-32 w-0.5 bg-[#1877F2] z-10"></div>
                    </div>
                    <div>
                      <p className="text-[#9C0300] text-sm mb-2">Status</p>
                      <p className="text-sm">Arrived Vellore </p>
                      <p className="text-sm">at 13:30 pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-3 h-3 rounded-full border-8 border-[#1877F2] z-20">
                      <div className="absolute top-[-3.5px] right-[-3.5px] w-2 h-2 rounded-full bg-white z-30"></div>
                      <div className="absolute top-0 right-0 h-full min-h-32 md:min-h-24 w-0.5 bg-[#1877F2] z-10"></div>
                    </div>
                    <div>
                      <p className="text-[#9C0300] text-sm mb-2">Reached</p>
                      <p className="text-sm">Arrived Hosur</p>
                      <p className="text-sm">at 15:00pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-3 h-3 rounded-full border-8 border-[#4CAF50] z-20">
                      <div className="absolute top-[-3.5px] right-[-3.5px] w-2 h-2 rounded-full bg-white z-30"></div>
                    </div>
                    <div>
                      <p className="text-[#9C0300] text-sm mb-2">Pickup</p>
                      <p className="text-sm">Bengaluru Hub</p>
                      <p className="text-sm">at 16:00pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/3">
                <p className="text-base text-[#9C0300] text-center">Delivery Terms</p>
                <div className="flex items-center justify-between gap-4 mt-4">
                  <img src={os1} alt="Shipping Image" className="w-32 h-20 object-cover" />
                  <p className="text-xs">
                    Enter the necessary details below to view, track, and manage
                    your order as a guest or as an account holder.Lorem ipsum
                    dolor sit amet. Qui animi iusto qui corrupti autem rem
                    facilis excepturi At quia sequi.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 mt-4">
                  <img src={os2} alt="Delivery Image" className="w-32 h-20 object-cover" />
                  <p className="text-xs">
                    Enter the necessary details below to view, track, and manage
                    your order as a guest or as an account holder.Lorem ipsum
                    dolor sit amet. Qui animi iusto qui corrupti autem rem
                    facilis excepturi At quia sequi.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 mt-4">
                  <img src={os3} alt="Unboxing Image" className="w-32 h-20 object-cover" />
                  <p className="text-xs">
                    Enter the necessary details below to view, track, and manage
                    your order as a guest or as an account holder.Lorem ipsum
                    dolor sit amet. Qui animi iusto qui corrupti autem rem
                    facilis excepturi At quia sequi. Est soluta aperiam 33
                    consequatur quia in commodi dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderStatus;
