import React, { ReactNode } from "react";
import Sidebar from "../../../dashboardComponent/Sidebar";
import DashboardHeader from "../../../dashboardComponent/DashboardHeader";
import PrivateRoute from "../../../privateRoute/PrivateRoute";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="md:flex">
        <div className="md:w-[15%]">
          {/* responsive sidebar */}
          <div className="md:hidden"></div>
          <div className="hidden md:block w-full">
            <Sidebar />
          </div>
        </div>
        <div className="md:w-[85%] bg-gray-50">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default layout;
