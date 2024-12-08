import React from "react";
import Sidebar from "../../../dashboardComponent/Sidebar/Sidebar";
import DashboardHeader from "../../../dashboardComponent/DashboardHeader/DashboardHeader";
import PrivateRoute from "../../../privateRoute/PrivateRoute";

const layout = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="flex">
        <div className="w-[15%]">
          <Sidebar></Sidebar>
        </div>
        <div className="w-[85%] bg-gray-50">
          <DashboardHeader></DashboardHeader>
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default layout;
