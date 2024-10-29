import React from "react";
import Header from "../../components/Header/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default layout;
