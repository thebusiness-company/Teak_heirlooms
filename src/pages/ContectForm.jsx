import { useForm } from "react-hook-form";
import { useContact } from "../Hooks/useContact";
import WhatsApp from "../assets/images/WhatsApp.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const mutation = useContact();

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6 bg-[#FFF1DF] min-h-screen justify-center items-center">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-[#9C0300] font-bold text-2xl">JUST SAY HI!</h2>
                <p className="text-gray-600 text-sm mb-4">
                    Tell us about yourself and your need. We&apos;ll contact you soon.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            className="border-b border-dashed border-[#9C0300] p-2  focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="First Name"
                            {...register("first_name")}
                        />
                        <input
                            className="border-b border-dashed border-[#9C0300] p-2  focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Last Name"
                            {...register("last_name")}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            className="border-b border-dashed border-[#9C0300] p-2  focus:outline-none focus:ring-2 focus:ring-red-400"
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <input
                            className="border-b border-dashed border-[#9C0300] p-2  focus:outline-none focus:ring-2 focus:ring-red-400"
                            type="tel"
                            placeholder="Phone No."
                            {...register("phone")}
                        />
                    </div>
                    <textarea
                        className="border-b border-dashed border-[#9C0300] p-2 w-full  focus:outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Description"
                        {...register("description")}
                    />
                    <button type="submit" className="bg-[#9C0300] text-white px-6 py-2 rounded w-full hover:bg-red-700">
                        SUBMIT
                    </button>
                </form>

                <div className="text-center mt-4 text-gray-600">or</div>
                <a href="https://wa.me/7094054396" target="_blank" rel="noopener noreferrer">
                    <button className="border-2 border-dashed border-[#9C0300] px-6 py-2 rounded flex items-center gap-2 mx-auto cursor-pointer mt-2">
                        <img src={WhatsApp} alt="WhatsApp" className="w-auto h-10" />
                        Click here for Support
                    </button>
                </a>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <h3 className="text-[#9C0300] font-bold text-lg mt-16 ">CONTACT INFORMATION</h3>
                <p className="text-gray-600 text-sm mt-4">
                    244, Spring Garden,<br /> 1st Street, SH 40, Akkarai,<br /> Chennai,<br /> Tamil Nadu 600115
                </p>
                <p className="text-gray-600 text-sm mt-6">
                    Email:{" "}
                    <a href="mailto:Teakheirlooms@gmail.com" className="text-blue-500">
                        Teakheirlooms@gmail.com
                    </a>
                </p>
                <p className="text-gray-600 text-sm">Call Us: +91 90xxx25xxx</p>
                <h3 className="text-[#9C0300] font-bold text-lg mt-6">FOLLOW US</h3>
                <div className="flex gap-4 mt-4 mb-16">
                    <a href="http://instagram.com/" className="text-2xl"><FaInstagramSquare/></a>
                    <a href="http://facebook.com/" className="text-2xl"><FaSquareFacebook /></a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
