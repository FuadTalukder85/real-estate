"use client";
import Image from "next/image";
import propertyDetails01 from "../../../../assets/images/propertyImg/propertyDetails01.png";
import propertyDetails02 from "../../../../assets/images/propertyImg/propertyDetails02.png";
import propertyDetails03 from "../../../../assets/images/propertyImg/propertyDetails03.png";
import Container from "../../../../components/Container";
import { IoLocationOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import ContactSeller from "../../../../components/ContactSeller";
import { TParams } from "../../../../types/types";
import Review from "../../../../components/Review/Review";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { IoIosStarOutline, IoMdClose } from "react-icons/io";
import { BsBoxArrowRight } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { MdLink } from "react-icons/md";
import toast from "react-hot-toast";
import ReusableBtn from "../../../../components/reusableBtn/reusableBtn";

const PropertyDetails = ({}) => {
  const params = useParams();
  const { PropertyId } = params as TParams;
  const [singleProperty, setSingleProperty] = useState<any>(null);

  // share dropdown
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const shareRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // handle copy
  const handleCoppy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast.success("Copied Listing URL", { position: "top-right" });
    });
  };
  // handle facebook share
  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(fbShareUrl, "target: _blank");
  };
  // handle linkedin share
  const handleLinkedinShare = () => {
    const url = encodeURIComponent(window.location.href);
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedinShareUrl, "target: _blank");
  };

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`http://localhost:4900/property/${PropertyId}`);
        const data = await res.json();
        setSingleProperty(data);
      } catch (error) {
        console.error("Failed to fetch property:", error);
      }
    };

    fetchProperty();
  }, [PropertyId]);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 20,
    },
    created: (instance) => {
      setInterval(() => {
        instance.next();
      }, 5000);
    },
  });
  return (
    <div>
      <div className="keen-slider" ref={sliderRef}>
        <div className="keen-slider__slide number-slide1">
          <Image
            className="w-full"
            src={propertyDetails01}
            alt="propertyDetails01"
          ></Image>
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            className="w-full"
            src={propertyDetails02}
            alt="propertyDetails02"
          ></Image>
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            className="w-full"
            src={propertyDetails03}
            alt="propertyDetails03"
          ></Image>
        </div>
      </div>
      <Container>
        <div className="md:grid grid-cols-12 gap-10 mt-12">
          <div className="col-span-7">
            <div className="bg-white shadow-md p-3 md:p-5 rounded-lg">
              <div className="md:flex justify-between relative">
                <ul className="flex items-center gap-2 md:gap-5">
                  <li>
                    <ReusableBtn>For {singleProperty?.propertyFor}</ReusableBtn>
                  </li>
                  <li>
                    <button className="text-seaBlue font-semibold text-xl border-b-2 pb-1 border-yellow rounded-sm">
                      Build year :
                      <span className="text-yellow font-bold text-sm md:text-xl ps-2">
                        {singleProperty?.buildYear}
                      </span>
                    </button>
                  </li>
                </ul>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 font-semibold bg-seaBlue text-white p-1 px-3 rounded-[4px]">
                    <IoIosStarOutline />
                    Save
                  </button>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-1 font-semibold bg-seaBlue text-white p-1 px-3 rounded-[4px]"
                  >
                    <BsBoxArrowRight />
                    Share
                  </button>
                  <ReusableBtn>Rent Now</ReusableBtn>
                  {isDropdownVisible && (
                    <div
                      ref={shareRef}
                      className="absolute right-0 top-10 bg-white shadow-lg py-3 px-5"
                    >
                      <div
                        onClick={toggleDropdown}
                        className="flex justify-between"
                      >
                        <span className="text-seaBlue font-semibold">
                          Share listing
                        </span>
                        <IoMdClose className="text-2xl p-1 rounded-md cursor-pointer hover:text-white hover:bg-seaBlue transition-all duration-700" />
                      </div>
                      <ul className="flex gap-3 mt-8 pr-16">
                        <li
                          onClick={handleCoppy}
                          className="border border-seaBlue p-2 rounded-full hover:bg-seaBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer"
                        >
                          <MdLink />
                        </li>
                        <li
                          onClick={handleFacebookShare}
                          className="border border-seaBlue p-2 rounded-full hover:bg-seaBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer"
                        >
                          <FaFacebook />
                        </li>
                        <li
                          onClick={handleLinkedinShare}
                          className="border border-seaBlue p-2 rounded-full hover:bg-seaBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer"
                        >
                          <FaLinkedinIn />
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5 md:mt-10 flex items-center justify-between">
                <h3 className="text-2xl md:text-4xl font-semibold text-seaBlue">
                  {singleProperty?.propertyName}
                </h3>
                <div className="flex md:flex-col items-center justify-between mt-3 md:mt-0">
                  <p className="text-seaBlue font-semibold text-2xl">
                    ${singleProperty?.price}.00
                  </p>
                  <p className="text-end font-semibold text-light">
                    {singleProperty?.squareFoot} / SqFt
                  </p>
                </div>
              </div>
              <div className="mt-7 font-semibold text-xl text-seaBlue">
                <li className="flex gap-3 items-center">
                  <IoLocationOutline className="text-yellow text-2xl" />
                  {singleProperty?.address}, {singleProperty?.city}
                </li>
              </div>
              {/* description */}

              <h5 className="mt-5 md:mt-10 text-seaBlue text-2xl font-semibold capitalize">
                description:
              </h5>
              <p className="mt-2 text-light pr-2">
                {singleProperty?.description}
              </p>
            </div>
            {/* property details */}
            <div className="mt-5 md:mt-10 shadow-md p-3 md:p-5 rounded-lg">
              <h5 className="text-seaBlue text-2xl font-semibold capitalize">
                Properties Details:
              </h5>
              <div className="md:flex gap-16 justify-between text-seaBlue">
                <ul className="w-full">
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Property type : </span>
                    <span className="text-light">
                      {singleProperty?.propertyCategory}
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Area Size : </span>
                    <span className="text-light">
                      {singleProperty?.squareFoot} SqFt
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Bedroom : </span>
                    <span className="text-light">
                      0{singleProperty?.bedroom}
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Garadge : </span>
                    <span className="text-yellow">
                      <GiCheckMark />
                    </span>
                  </li>
                </ul>
                <ul className="w-full">
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Build year : </span>
                    <span className="text-light">
                      {singleProperty?.buildYear}
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Price : </span>
                    <span className="text-light">
                      ${singleProperty?.price}.00
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Bathroom : </span>
                    <span className="text-light">
                      0{singleProperty?.bathroom}
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Security : </span>
                    <span className="text-yellow">
                      <GiCheckMark />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* whats nearby */}
            <div className="mt-5 md:mt-10 shadow-md p-3 md:p-5 rounded-lg">
              <h5 className="text-seaBlue text-2xl font-semibold capitalize">
                What,s nearby?
              </h5>
              <p className="mt-2 text-light pr-2">
                Explore nearby amenities to precisely locate your property and
                identify surrounding conveniences, providing a comprehensive
                overview of the living environment and the property,s
                convenience.
              </p>
              <div className="md:flex gap-16 justify-between text-seaBlue">
                <ul className="w-full">
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">School : </span>
                    <span className="text-light">0.07 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">University : </span>
                    <span className="text-light">2.3 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Grocery center : </span>
                    <span className="text-light">0.3 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Market : </span>
                    <span className="text-light">1.3 km</span>
                  </li>
                </ul>
                <ul className="w-full">
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Hospital : </span>
                    <span className="text-light">2.3 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Metro station : </span>
                    <span className="text-light">1.1 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Gym, wellness : </span>
                    <span className="text-light">0.9 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">River : </span>
                    <span className="text-light">3.3 km</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-5 over">
            <ContactSeller contactSeller={singleProperty}></ContactSeller>
          </div>
        </div>
        {/* review */}
        <Review email={singleProperty?.email}></Review>
      </Container>
    </div>
  );
};

export default PropertyDetails;
