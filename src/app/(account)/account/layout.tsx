import React, { ReactNode } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

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
