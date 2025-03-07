import React, { ReactNode } from "react";

const ReusableBtn: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className="bg-yellow text-white py-3 px-4 text-sm font-semibold uppercase rounded-lg hover:bg-seaBlue transition-all duration-700">
      {children}
    </button>
  );
};

export default ReusableBtn;
