import Image from "next/image";
import logo from "../../assets/images/real-estate-logo.png";
import React from "react";
import Container from "../Container/Container";
import Link from "next/link";

const TopHeader = () => {
  return (
    <Container>
      <div className="flex justify-between py-1">
        <Link href="/">
          <Image src={logo} alt="logo" width={150}></Image>
        </Link>
        <div className="flex gap-10 items-center">
          <div>
            <p className="text-light font-semibold text-sm">Call for Enquiry</p>
            <b className="text-lg text-seaBlue">01756-867585</b>
          </div>
          <button className="border-2 border-yellow text-seaBlue py-1 px-6 font-bold uppercase rounded-sm">
            Live Chat
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TopHeader;
