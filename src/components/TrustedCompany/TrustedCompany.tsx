import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import company01 from "../../assets/images/companyLogo/company01.png";
import company02 from "../../assets/images/companyLogo/company02.png";
import company03 from "../../assets/images/companyLogo/company03.png";
import company04 from "../../assets/images/companyLogo/company04.png";
import company05 from "../../assets/images/companyLogo/company05.png";
import company06 from "../../assets/images/companyLogo/company06.png";

const TrustedCompany = () => {
  return (
    <Container>
      <div className="-mt-16">
        <h5 className="font-bold bg-white p-5 w-[350px] text-[#2A4766]">
          Trusted by over 150+ major companies
        </h5>
        <div className="flex gap-5 justify-between pt-10 bg-white">
          <Image src={company01} alt="company01"></Image>
          <Image src={company02} alt="company01"></Image>
          <Image src={company03} alt="company01"></Image>
          <Image src={company04} alt="company01"></Image>
          <Image src={company05} alt="company01"></Image>
          <Image src={company06} alt="company01"></Image>
        </div>
      </div>
    </Container>
  );
};

export default TrustedCompany;
