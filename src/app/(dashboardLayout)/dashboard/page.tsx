"use client";
import React, { useContext } from "react";
import Analytics from "../../../dashboardComponent/Analytics/Analytics";
import NewListing from "../../../dashboardComponent/NewListing/NewListing";
import RecentReview from "../../../dashboardComponent/RecentReview/RecentReview";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useGetUserQuery } from "../../../redux/userApi/UserApi";
import AgentHome from "../../../dashboardComponent/AgentHome";
import { LoginInputs } from "../../../types/types";

const AdminPage = () => {
  const { user } = useContext(AuthContext);
  const { data } = useGetUserQuery("");
  const currentUser = data?.find(
    (dt: LoginInputs) => dt?.email === user?.email
  );
  return (
    <div>
      {currentUser.role === "Admin" ? (
        <div className="">
          <Analytics></Analytics>
          <div className="md:grid md:grid-cols-5 gap-5 px-3 md:px-10">
            <div className="col-span-3">
              <NewListing></NewListing>
            </div>
            <div className="col-span-2">
              <RecentReview></RecentReview>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-10 mt-10">
          <AgentHome></AgentHome>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
