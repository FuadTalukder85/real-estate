import React from "react";
import Container from "../../../components/Container";
import { CiHome, CiShoppingCart } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
import ContactForm from "../../../components/Form/ContactForm";
const ContactPage = () => {
  return (
    <div>
      <div
        className="py-16 md:py-36"
        style={{
          backgroundImage: "url('/agents_hero.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h5 className="text-white text-center font-semibold text-2xl md:text-4xl">
          - Contact -
        </h5>
      </div>
      <Container>
        <div className="md:flex gap-5 justify-between mt-10 md:mt-28 p-3 md:p-0">
          <div className="text-center bg-[#F7F7F7] px-16 py-10 w-full rounded-lg">
            <CiShoppingCart className="text-yellow text-8xl mx-auto" />
            <p className="text-seaBlue font-semibold text-2xl">Contact Sales</p>
            <p className="text-seaBlue mt-3">sales@gmail.com</p>
            <p className="text-seaBlue">+8801756867585</p>
          </div>
          <div className="text-center bg-[#F7F7F7] px-16 py-10 w-full rounded-lg mt-3 md:mt-0">
            <CiHome className="text-yellow text-8xl mx-auto" />
            <p className="text-seaBlue font-semibold text-2xl">Contact Rents</p>
            <p className="text-seaBlue mt-3">sales@gmail.com</p>
            <p className="text-seaBlue">+8801756867585</p>
          </div>
          <div className="text-center bg-[#F7F7F7] px-16 py-10 w-full rounded-lg mt-3 md:mt-0">
            <PiPhoneCallThin className="text-yellow text-8xl mx-auto" />
            <p className="text-seaBlue font-semibold text-2xl">Contact Buy</p>
            <p className="text-seaBlue mt-3">sales@gmail.com</p>
            <p className="text-seaBlue">+8801756867585</p>
          </div>
        </div>
      </Container>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactPage;
