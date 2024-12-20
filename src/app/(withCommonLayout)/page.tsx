import React from "react";
import Banner from "../../components/Banner/Banner";
import LatestSale from "../../components/LatestSale/LatestSale";
import FeaturedListing from "../../components/FeaturedListing/FeaturedListing";
import TrustedCompany from "../../components/TrustedCompany/TrustedCompany";
import OurService from "../../components/OurService/OurService";
import Testimonials from "../../components/Testimonials/Testimonials";
import OurTeam from "../../components/OurTeam/OurTeam";
import PopularPlace from "../../components/PopularPlace/PopularPlace";
import RecentSell from "../../components/RecentSell/RecentSell";

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
