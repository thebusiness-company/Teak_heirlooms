import { useForm } from "react-hook-form";
import { useContact } from "../Hooks/useContact";
import WhatsApp from "../assets/images/WhatsApp.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useEffect } from "react";

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const mutation = useContact();

    useEffect(() => {
        window.scrollTo({top:0, behavior: "smooth"});
    }, []);

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: () => reset(),
        });
    };

    return (
      <div className="flex flex-col lg:flex-row gap-6 p-6 bg-[#FFF1DF] min-h-screen justify-center items-center overflow-x-hidden">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md shadow-[#00000040] w-full max-w-lg">
          <h2 className="text-[#9C0300] font-bold text-3xl lg:text-4xl font-upright lg:mb-4">
            JUST SAY HI!
          </h2>
          <p className="text-sm mb-4">
            Tell us about yourself and your need. We&apos;ll contact you soon.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h1>First Name</h1>
                <input
                  className="border-b border-dashed border-[#9C0300] p-2  focus:outline-none"
                  placeholder="Enter First Name"
                  {...register("first_name")}
                />
              </div>
              <div>
                <h1>Last Name</h1>
                <input
                  className="border-b border-dashed border-[#9C0300] p-2  focus:outline-none"
                  placeholder="Enter Last Name"
                  {...register("last_name")}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h1>Email id:</h1>
                <input
                  className="border-b border-dashed border-[#9C0300] p-2  focus:outline-none"
                  type="email"
                  placeholder="Enter Email"
                  {...register("email")}
                />
              </div>
              <div>
                <h1>Phone No.</h1>
                <input
                  className="border-b border-dashed border-[#9C0300] p-2 focus:outline-none"
                  type="tel"
                  placeholder="Enter Phone No."
                  {...register("phone")}
                />
              </div>
            </div>
            <div className="lg:mt-8">
              <h1 className="mb-2 lg:mb-4 md:text-[#9C0300]">Description</h1>
              <textarea
                className="border border-dashed rounded-xl border-[#9C0300] p-2 w-full focus:outline-none"
                placeholder="Enter Description"
                {...register("description")}
              />
            </div>
            <div className="flex flex-row justify-end items-center">
              <button
                type="submit"
                className="text-center bg-[#9C0300] text-white px-6 py-2 rounded w-auto md:w-1/3 hover:bg-red-700 cursor-pointer"
              >
                SUBMIT
              </button>
            </div>
          </form>

          <div className="text-center mt-4 text-gray-600">or</div>
          <a
            href="https://wa.me/7339574747"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-dashed border-[#9C0300] px-6 py-2 rounded flex items-center gap-2 mx-auto cursor-pointer mt-2">
              <img src={WhatsApp} alt="WhatsApp" className="w-auto h-10" />
              Click here for Support
            </button>
          </a>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow-md shadow-[#00000040] w-full max-w-sm lg:h-full ">
          <h3 className="text-[#9C0300] font-bold text-lg mt-16 font-upright">
            CONTACT INFORMATION
          </h3>
          <h4 className="font-semibold my-2 lg:my-4">Address</h4>
          <p className="text-gray-600 text-sm mt-4">
            244, Spring Garden,
            <br /> 1st Street, SH 40, Akkarai,
            <br /> Chennai,
            <br /> Tamil Nadu 600115
          </p>
          <p className="text-[#9C0300] text-sm mt-6 lg:mt-12">
            Email Us:{" "}
            <a href="mailto:info@teakheirlooms.com" className="text-blue-500">
              info@teakheirlooms.com
            </a>
          </p>
          <p className="text-sm ">
            <a href="tel:7339574747">
              <span className="text-[#9C0300]">Call Us:</span> +91 7339574747
            </a>
          </p>
          <h3 className="text-[#9C0300] font-bold text-lg mt-6 lg:mt-12 font-upright">
            FOLLOW US
          </h3>
          <div className="flex gap-4 mt-4 mb-16 lg:mb-20">
            <a href="http://instagram.com/" className="text-2xl">
              <FaInstagramSquare />
            </a>
            <a href="http://facebook.com/" className="text-2xl">
              <FaSquareFacebook />
            </a>
          </div>
        </div>
      </div>
    );
};

export default ContactForm;
