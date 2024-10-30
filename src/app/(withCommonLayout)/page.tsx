import React from "react";
import Banner from "../../components/Banner/Banner";
import LatestSale from "../../components/LatestSale/LatestSale";
// import HomePage from "./HomePage/page";

const page = () => {
  return (
    <div>
      {/* <HomePage></HomePage> */}
      <Banner></Banner>
      <LatestSale></LatestSale>
    </div>
  );
};

export default page;
