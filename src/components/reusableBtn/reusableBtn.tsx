import React, { ReactNode } from "react";

const ReusableBtn: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className="bg-[#F1913D] text-white py-3 px-4 text-sm font-semibold uppercase rounded-lg hover:bg-[#2A4766] transition-all duration-700">
      {children}
    </button>
  );
};

export default ReusableBtn;
