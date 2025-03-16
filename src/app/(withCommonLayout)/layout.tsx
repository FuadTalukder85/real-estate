import React, { ReactNode } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Question from "../../components/Question";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Question></Question>
      <Footer></Footer>
    </div>
  );
};

export default layout;
