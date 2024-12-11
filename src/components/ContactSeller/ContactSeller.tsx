"use client";
import Image from "next/image";
import { useGetUserQuery } from "../../redux/userApi/UserApi";
import { LoginInputs } from "../../types/types";
import logo from "../../assets/images/real-estate-logo.png";
type ContactSellerProps = {
  contactSeller: LoginInputs;
};
const ContactSeller = ({ contactSeller }: ContactSellerProps) => {
  const { data } = useGetUserQuery("");
  const listedBy = data?.find(
    (dt: LoginInputs) => dt?.email === contactSeller?.email
  );

  return (
    <div className="w-[480px]">
      <div className="w-full mx-auto bg-white border shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[#2A4766] mb-4 uppercase">
          Listed By
        </h2>
        <div className="flex items-center mb-4">
          <Image
            src={listedBy?.image || "/image"}
            width={40}
            height={40}
            alt="seller"
            className="w-16 h-16 rounded-lg mr-4 object-cover"
          />
          <div>
            <p className="font-medium text-[#2A4766]">{listedBy?.name}</p>
            <p className="text-sm text-[#2A4766]">{listedBy?.number}</p>
            <p className="text-sm text-[#2A4766]">{listedBy?.email}</p>
          </div>
        </div>
        <div>
          <h3 className="text-center font-semibold text-xl text-[#2A4766] uppercase">
            Contact Agent
          </h3>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-[#2A4766] mb-1"
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
              className="block text-sm font-medium text-[#2A4766] mb-1"
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
              className="block text-sm font-medium text-[#2A4766] mb-1"
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
              className="block text-sm font-medium text-[#2A4766] mb-1"
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
            className="w-full bg-[#ffac37] text-white py-2 rounded-md hover:bg-[#2A4766] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Send Message
          </button>
        </form>
      </div>
      {/*  */}
      <div
        className="relative mt-10 shadow-md bg-cover bg-center bg-no-repeat rounded-lg w-full h-[560px] p-10 text-white"
        style={{ backgroundImage: "url('/ads.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg group-hover:scale-125 transition-all duration-700 ease-in-out"></div>
        <div className="relative z-10">
          <Image src={logo} alt="logo" width={150} height={150} />
          <h5 className="mt-52 text-3xl font-bold">
            We can help you find a local real estate agent
          </h5>
          <p className="mt-3">
            Connect with a trusted agent who knows the market inside out -
            whether you,re buying or selling.
          </p>
          <button className="mt-5 w-full bg-[#ffac37] text-white py-2 rounded-md hover:bg-[#2A4766] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2">
            Connect with an agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSeller;
