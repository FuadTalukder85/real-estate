import React from "react";
import Container from "../../../components/Container/Container";
import { CiHome, CiShoppingCart } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
import ContactForm from "../../../components/ContactForm/ContactForm";
const ContactPage = () => {
  return (
    <div>
      <div className="miniBanner py-28">
        <h5 className="text-white text-center font-semibold text-4xl">
          - Contact -
        </h5>
      </div>
      <Container>
        <div className="flex gap-5 justify-between mt-28">
          <div className="text-center bg-[#F7F7F7] px-16 py-10 w-full rounded-xl">
            <CiShoppingCart className="text-[#ffac37] text-8xl mx-auto" />
            <p className="text-[#2A4766] font-semibold text-2xl">
              Contact Sales
            </p>
            <p className="text-[#2A4766] mt-3">sales@gmail.com</p>
            <p className="text-[#2A4766]">+8801756867585</p>
          </div>
          <div className="text-center bg-[#F7F7F7] px-16 py-10 w-full rounded-xl">
            <CiHome className="text-[#ffac37] text-8xl mx-auto" />
            <p className="text-[#2A4766] font-semibold text-2xl">
              Contact Rents
            </p>
            <p className="text-[#2A4766] mt-3">sales@gmail.com</p>
            <p className="text-[#2A4766]">+8801756867585</p>
          </div>
          <div className="text-center bg-[#F7F7F7] px-16 py-10 w-full rounded-xl">
            <PiPhoneCallThin className="text-[#ffac37] text-8xl mx-auto" />
            <p className="text-[#2A4766] font-semibold text-2xl">Contact Buy</p>
            <p className="text-[#2A4766] mt-3">sales@gmail.com</p>
            <p className="text-[#2A4766]">+8801756867585</p>
          </div>
        </div>
      </Container>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactPage;
