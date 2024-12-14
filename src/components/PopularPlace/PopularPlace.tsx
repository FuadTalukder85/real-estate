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
      <div className="text-center mt-10 md:mt-28">
        <b className="uppercase text-yellow">Find your city</b>
        <h2 className="text-2xl md:text-4xl font-semibold text-seaBlue">
          Popular Places
        </h2>
      </div>
      <div className="md:flex gap-5 mt-3 md:mt-10 p-3 md:p-0">
        <div>
          <div className="rounded-lg overflow-hidden relative">
            <Image
              src={popularPlaces01}
              alt="popularPlaces01"
              className="rounded-lg hover:scale-125 transition-all duration-700 ease-in-out"
            ></Image>
            <div>
              <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-seaBlue backdrop-blur-sm w-full py-2">
                Florida <span className="">27 Properties</span>
              </button>
            </div>
          </div>
          <div className="rounded-lg mt-3 md:mt-5 overflow-hidden relative">
            <Image
              src={popularPlaces02}
              alt="popularPlaces01"
              className="rounded-lg hover:scale-125 transition-all duration-700 ease-in-out"
            ></Image>
            <div>
              <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-seaBlue backdrop-blur-sm w-full py-2">
                Florida <span className="">27 Properties</span>
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg mt-3 md:mt-0 overflow-hidden relative">
          <Image
            src={popularPlaces03}
            alt="popularPlaces01"
            className="rounded-lg hover:scale-125 transition-all duration-700 ease-in-out"
          ></Image>
          <div>
            <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-seaBlue backdrop-blur-sm w-full py-2">
              Florida <span className="">27 Properties</span>
            </button>
          </div>
        </div>
        <div>
          <div className="rounded-lg mt-3 md:mt-0 overflow-hidden relative">
            <Image
              src={popularPlaces04}
              alt="popularPlaces01"
              className="rounded-lg hover:scale-125 transition-all duration-700 ease-in-out"
            ></Image>
            <div>
              <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-seaBlue backdrop-blur-sm w-full py-2">
                Florida <span className="">27 Properties</span>
              </button>
            </div>
          </div>
          <div className="rounded-lg mt-3 md:mt-5 overflow-hidden relative">
            <Image
              src={popularPlaces05}
              alt="popularPlaces01"
              className="rounded-lg hover:scale-125 transition-all duration-700 ease-in-out"
            ></Image>
            <div>
              <button className="absolute px-5 flex justify-between bottom-5 bg-[#ffffffc5] text-lg font-semibold text-seaBlue backdrop-blur-sm w-full py-2">
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
