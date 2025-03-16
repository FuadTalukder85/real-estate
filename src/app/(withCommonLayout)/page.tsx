import React from "react";
import Banner from "../../components/Banner";
import LatestSale from "../../components/LatestSale";
import FeaturedListing from "../../components/FeaturedListing/FeaturedListing";
import TrustedCompany from "../../components/TrustedCompany/TrustedCompany";
import OurService from "../../components/OurService";
import Testimonials from "../../components/Testimonials";
import OurTeam from "../../components/OurTeam";
import PopularPlace from "../../components/PopularPlace";
import RecentSell from "../../components/RecentSell";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <TrustedCompany></TrustedCompany>
      <FeaturedListing></FeaturedListing>
      <OurService></OurService>
      <LatestSale></LatestSale>
      <Testimonials></Testimonials>
      <RecentSell></RecentSell>
      <PopularPlace></PopularPlace>
      <OurTeam></OurTeam>
    </div>
  );
};

export default page;
