"use client";
import Image from "next/image";
import proImg from "../../assets/images/profileImg01.jpg";
import { useEffect, useState } from "react";

const ContactSeller = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`w-[480px] ${isFixed ? "fixed top-0 " : ""}`}>
      <div className="w-full mx-auto bg-white border shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Contact Sellers
        </h2>
        <div className="flex items-center mb-4">
          <Image
            src={proImg}
            alt="Seller"
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="font-medium text-gray-800">Sn Jack</p>
            <p className="text-sm text-gray-600">01756-867585</p>
            <p className="text-sm text-gray-600">snjack1920@gmail.com</p>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="fullName"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="phoneNumber"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="ex 01756000000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="emailAddress"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="youremail@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="message"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#ffac37] text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSeller;
