import React from "react";
import Container from "../Container/Container";
import { CiHome } from "react-icons/ci";
import { PiEnvelopeOpenThin, PiPhoneCallThin } from "react-icons/pi";

const ContactForm = () => {
  return (
    <div className="bg-[#F7F7F7] mt-28 py-16">
      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8 bg-white back p-10">
            <h5 className="text-xl font-semibold pb-2 border-b-2 border-[#F7F7F7]">
              Fillup The Form
            </h5>
            <div className="mt-10">
              <div className="flex gap-5">
                <div className="text-[#2A4766] w-full">
                  <p>Name</p>
                  <input className="mt-2 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"></input>
                </div>
                <div className="text-[#2A4766] w-full">
                  <p>Email</p>
                  <input className="mt-2 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"></input>
                </div>
              </div>
              <div className="text-[#2A4766] mt-5">
                <p>Subject</p>
                <input className="mt-2 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"></input>
              </div>
              <div className="text-[#2A4766] mt-5">
                <p>Message</p>
                <textarea className="mt-2 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"></textarea>
              </div>
            </div>
            {/* submit button  */}
            <button className="mt-10 bg-[#ffac37] text-white font-semibold py-3 px-7 rounded-md hover:bg-[#ffb958] hover:text-white transition-all duration-700">
              Submit Request
            </button>
          </div>
          <div className="col-span-4 bg-white p-10">
            <h5 className="text-xl font-semibold pb-2 border-b-2 border-[#F7F7F7]">
              Reach out
            </h5>
            <p className="mt-10 font-semibold text-[#2A4766] text-2xl">
              Get In Touch
            </p>
            <p className="mt-5 text-[#2A4766]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <div className="grid grid-cols-12 items-center gap-5 mt-5">
              <CiHome className="col-span-3 text-[#ffac37] w-16 text-8xl" />
              <div className="col-span-9 text-[#2A4766]">
                <h5 className="font-semibold">Reach Us</h5>
                <p className="font-semibold text-sm">
                  1235, New Market, Eliza Road, Sincher 80 CA, Canada, USA
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-5">
              <PiEnvelopeOpenThin className="col-span-3 text-[#ffac37] w-16 text-8xl" />
              <div className="col-span-9 text-[#2A4766]">
                <h5 className="font-semibold">Email Us</h5>
                <p className="font-semibold text-sm">webfuadtk@gmail.com</p>
              </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-5">
              <PiPhoneCallThin className="col-span-3 text-[#ffac37] w-16 text-8xl" />
              <div className="col-span-9 text-[#2A4766]">
                <h5 className="font-semibold">Call Us</h5>
                <p className="font-semibold text-sm">+8801756867585</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
