import React, { ReactNode } from "react";
import Sidebar from "../../../dashboardComponent/Sidebar/Sidebar";
import DashboardHeader from "../../../dashboardComponent/DashboardHeader/DashboardHeader";
import PrivateRoute from "../../../privateRoute/PrivateRoute";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="md:flex">
        <div className="md:w-[15%]">
          {/* resoonsive sidebar */}
          <div className="md:hidden"></div>
          <div className="hidden md:block">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div className="md:w-[85%] bg-gray-50">
          <DashboardHeader></DashboardHeader>
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default layout;
