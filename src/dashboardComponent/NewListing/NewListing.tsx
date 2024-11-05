import Image from "next/image";
import React from "react";
import house01 from "../../assets/images/house01.jpg";

const NewListing = () => {
  return (
    <div className="mt-10 text-[#2A4766] bg-white p-5">
      <h5 className="font-semibold">New Listing</h5>
      <div className="border mt-5 rounded-md">
        <div className="grid grid-cols-12 bg-[#F9F9FC] p-3 px-5 font-semibold">
          <div className="col-span-8">
            <p>Listing</p>
          </div>
          <div className="col-span-4 flex justify-evenly gap-16">
            <p>Status</p>
            <p>Action</p>
          </div>
        </div>
        {/* card */}
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-8">
            <div className="flex items-center gap-5 border p-5">
              <Image
                className="rounded-md"
                src={house01}
                alt="house01"
                width={200}
              ></Image>
              <div>
                <p className="font-semibold text-lg">
                  Gorgeous Apartment Building
                </p>
                <p className="mt-2">Posting date: March 22, 2023</p>
                <p className="font-semibold text-lg mt-2">$5050,00</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 border h-full flex items-center justify-center">
            <button className="px-2 py-1 rounded-md tex-sm bg-[#198754] text-white">
              Approved
            </button>
          </div>
          <div className="col-span-2 border h-full flex items-center justify-center">
            <button className="px-2 py-1 rounded-md tex-sm bg-[#198754] text-white">
              Edit
            </button>
          </div>
        </div>
        {/* card */}
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-8">
            <div className="flex items-center gap-5 border p-5">
              <Image
                className="rounded-md"
                src={house01}
                alt="house01"
                width={200}
              ></Image>
              <div>
                <p className="font-semibold text-lg">
                  Gorgeous Apartment Building
                </p>
                <p className="mt-2">Posting date: March 22, 2023</p>
                <p className="font-semibold text-lg mt-2">$5050,00</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 border h-full flex items-center justify-center">
            <button className="px-2 py-1 rounded-md tex-sm bg-[#198754] text-white">
              Approved
            </button>
          </div>
          <div className="col-span-2 border h-full flex items-center justify-center">
            <button className="px-2 py-1 rounded-md tex-sm bg-[#198754] text-white">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewListing;
