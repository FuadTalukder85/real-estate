import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
