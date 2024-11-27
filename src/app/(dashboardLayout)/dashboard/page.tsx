"use client";
import React, { useContext } from "react";
import Analytics from "../../../dashboardComponent/Analytics/Analytics";
import NewListing from "../../../dashboardComponent/NewListing/NewListing";
import RecentReview from "../../../dashboardComponent/RecentReview/RecentReview";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useGetUserQuery } from "../../../redux/userApi/UserApi";
import AgentHome from "../../../dashboardComponent/AgentHome";

const page = () => {
  const { user } = useContext(AuthContext);
  const { data } = useGetUserQuery("");
  const currentUser = data?.find((dt) => dt?.email === user?.email);
  return (
    <div>
      {currentUser.role === "Admin" ? (
        <div className="">
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
      ) : (
        <div className="">
          <AgentHome></AgentHome>
        </div>
      )}
    </div>
  );
};

export default page;
