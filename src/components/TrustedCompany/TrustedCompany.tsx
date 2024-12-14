"use client";
import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import company01 from "../../assets/images/companyLogo/company01.png";
import company02 from "../../assets/images/companyLogo/company02.png";
import company03 from "../../assets/images/companyLogo/company03.png";
import company04 from "../../assets/images/companyLogo/company04.png";
import company05 from "../../assets/images/companyLogo/company05.png";
import company06 from "../../assets/images/companyLogo/company06.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./TrustedCompany.css";

const TrustedCompany = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        {dots}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="-mt-16">
        <h5 className="font-bold bg-white p-5 w-[350px] text-seaBlue">
          Trusted by over 150+ major companies
        </h5>
        <Slider {...settings} className="py-5">
          <Image
            width={200}
            height={200}
            src={company01}
            alt="company01"
          ></Image>
          <Image
            width={200}
            height={200}
            src={company02}
            alt="company01"
          ></Image>
          <Image
            width={200}
            height={200}
            src={company03}
            alt="company01"
          ></Image>
          <Image
            width={200}
            height={200}
            src={company04}
            alt="company01"
          ></Image>
          <Image
            width={200}
            height={200}
            src={company05}
            alt="company01"
          ></Image>
          <Image
            width={200}
            height={200}
            src={company06}
            alt="company01"
          ></Image>
        </Slider>
      </div>
    </Container>
  );
};

export default TrustedCompany;
