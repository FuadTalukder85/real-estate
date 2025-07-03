import React, { ReactNode } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
