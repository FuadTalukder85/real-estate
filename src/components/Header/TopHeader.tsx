import Image from "next/image";
import logo from "../../assets/images/real-estate-logo.png";
import React from "react";
import Container from "../Container/Container";

const TopHeader = () => {
  return (
    <Container>
      <div className="flex justify-between py-1">
        <div>
          <Image src={logo} alt="logo" width={150}></Image>
        </div>
        <div className="flex gap-10 items-center">
          <div>
            <p className="text-[#ABACB0] font-semibold text-sm">
              Call for Enquiry
            </p>
            <b className="text-lg text-[#2A4766]">01756-867585</b>
          </div>
          <button className="border-2 border-[#ffac37] text-[#2A4766] py-1 px-6 font-bold uppercase rounded-sm">
            Live Chat
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TopHeader;
