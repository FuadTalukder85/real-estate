import React from "react";
import Sidebar from "../../../dashboardComponent/Sidebar/Sidebar";
import DashboardHeader from "../../../dashboardComponent/DashboardHeader/DashboardHeader";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-[15%]">
        <Sidebar></Sidebar>
      </div>
      <div className="w-[85%] bg-[#F9F9FC]">
        <DashboardHeader></DashboardHeader>
        {children}
      </div>
    </div>
  );
};

export default layout;
