import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import popularPlaces01 from "../../assets/images/popularPlaceImg/popularPlaces01.jpg";
import popularPlaces02 from "../../assets/images/popularPlaceImg/popularPlaces02.jpg";
import popularPlaces03 from "../../assets/images/popularPlaceImg/popularPlaces03.jpg";
import popularPlaces04 from "../../assets/images/popularPlaceImg/popularPlaces04.jpg";
import popularPlaces05 from "../../assets/images/popularPlaceImg/popularPlaces05.jpg";

const PopularPlace = () => {
  return (
    <Container>
      <div className="text-center mt-28">
        <b className="uppercase text-[#F1913D]">Find your city</b>
        <h2 className="text-4xl font-semibold text-[#2A4766]">
          Popular Places
        </h2>
      </div>
      <div className="flex gap-5 mt-10">
        <div>
          <div className="overflow-hidden relative">
            <Image
              src={popularPlaces01}
              alt="popularPlaces01"
              className="hover:scale-125 transition-all duration-700 ease-in-out"
            ></Image>
            <div>
              <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-[#2A4766] backdrop-blur-sm w-full py-2">
                Florida <span className="">27 Properties</span>
              </button>
            </div>
          </div>
          <div className="mt-5 overflow-hidden relative">
            <Image
              src={popularPlaces02}
              alt="popularPlaces01"
              className="hover:scale-125 transition-all duration-700 ease-in-out"
            ></Image>
            <div>
              <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-[#2A4766] backdrop-blur-sm w-full py-2">
                Florida <span className="">27 Properties</span>
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <Image
            src={popularPlaces03}
            alt="popularPlaces01"
            className="hover:scale-125 transition-all duration-700 ease-in-out"
          ></Image>
          <div>
            <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-[#2A4766] backdrop-blur-sm w-full py-2">
              Florida <span className="">27 Properties</span>
            </button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden relative">
            <Image
              src={popularPlaces04}
              alt="popularPlaces01"
              className="hover:scale-125 transition-all duration-700 ease-in-out"
            ></Image>
            <div>
              <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-[#2A4766] backdrop-blur-sm w-full py-2">
                Florida <span className="">27 Properties</span>
              </button>
            </div>
          </div>
          <div className="mt-5 overflow-hidden relative">
            <Image
              src={popularPlaces05}
              alt="popularPlaces01"
              className="hover:scale-125 transition-all duration-700 ease-in-out"
            ></Image>
            <div>
              <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-[#2A4766] backdrop-blur-sm w-full py-2">
                Florida <span className="">27 Properties</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularPlace;
