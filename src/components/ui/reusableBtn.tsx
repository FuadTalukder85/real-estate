import React, { ReactNode } from "react";

const ReusableBtn: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className="bg-yellow text-white py-2 px-4 text-sm font-semibold uppercase rounded-[4px] hover:bg-seaBlue transition-all duration-700">
      {children}
    </button>
  );
};

export default ReusableBtn;
