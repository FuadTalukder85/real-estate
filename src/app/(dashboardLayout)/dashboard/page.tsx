import React from "react";
import DashboardHeader from "../../../dashboardComponent/DashboardHeader/DashboardHeader";
import Analytics from "../../../dashboardComponent/Analytics/Analytics";
import NewListing from "../../../dashboardComponent/NewListing/NewListing";
import RecentReview from "../../../dashboardComponent/RecentReview/RecentReview";

const page = () => {
  return (
    <div className="">
      <DashboardHeader></DashboardHeader>
      <Analytics></Analytics>
      <div className="grid grid-cols-5 gap-5 px-10">
        <div className="col-span-3">
          <NewListing></NewListing>
        </div>
        <div className="col-span-2">
          <RecentReview></RecentReview>
        </div>
      </div>
    </div>
  );
};

export default page;
