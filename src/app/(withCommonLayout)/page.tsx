import React from "react";
import Banner from "../../components/Banner/Banner";
import LatestSale from "../../components/LatestSale/LatestSale";
import FeaturedListing from "../../components/FeaturedListing/FeaturedListing";
import TrustedCompany from "../../components/TrustedCompany/TrustedCompany";
import OurService from "../../components/OurService/OurService";
import Testimonials from "../../components/Testimonials/Testimonials";
// import HomePage from "./HomePage/page";

const page = () => {
  return (
    <div>
      {/* <HomePage></HomePage> */}
      <Banner></Banner>
      <TrustedCompany></TrustedCompany>
      <FeaturedListing></FeaturedListing>
      <OurService></OurService>
      <LatestSale></LatestSale>
      <Testimonials></Testimonials>
    </div>
  );
};

export default page;
