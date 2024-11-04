import React from "react";
import Sidebar from "../../../dashboardComponent/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-[15%]">
        <Sidebar></Sidebar>
      </div>
      <div className="w-[85%]">{children}</div>
    </div>
  );
};

export default layout;
