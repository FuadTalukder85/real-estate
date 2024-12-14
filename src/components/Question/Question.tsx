import React from "react";
import Container from "../Container/Container";

const Question = () => {
  return (
    <div className="bg-yellow py-14 mt-28">
      <Container>
        <div className="flex justify-between">
          <div className="text-white">
            <h3 className="text-4xl font-semibold">Do You Have Questions ?</h3>
            <p className="mt-2">
              We,ll help you to grow your career and growth.
            </p>
          </div>
          <div className="bg-[#ff4e3728] p-1 flex items-center rounded-full">
            <button className="py-5 px-12 rounded-full bg-white font-semibold text-seaBlue hover:bg-seaBlue hover:text-white transition-all duration-700 ease-in-out">
              Contact Us Today
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Question;
