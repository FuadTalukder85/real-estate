import Image from "next/image";
import propertyDetails01 from "../../../../assets/images/propertyImg/propertyDetails01.png";
import propertyDetails02 from "../../../../assets/images/propertyImg/propertyDetails02.png";
import propertyDetails03 from "../../../../assets/images/propertyImg/propertyDetails03.png";
import Container from "../../../../components/Container/Container";
import { IoLocationOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import ContactSeller from "../../../../components/ContactSeller/ContactSeller";
import { TParams } from "../../../../types/types";
import Review from "../../../../components/Review/Review";

const PropertyDetails = async ({ params }: { params: TParams }) => {
  const { PropertyId } = await params;
  const res = await fetch(`http://localhost:4900/property/${PropertyId}`);
  const singleProperty = await res.json();
  return (
    <div>
      <div className="flex gap-5 overflow-hidden">
        <Image src={propertyDetails01} alt="propertyDetails01"></Image>
        <Image src={propertyDetails02} alt="propertyDetails02"></Image>
        <Image src={propertyDetails03} alt="propertyDetails03"></Image>
      </div>
      <Container>
        <div className="grid grid-cols-12 gap-20 mt-12">
          <div className="col-span-7">
            <div className="shadow-md p-5 rounded-lg">
              <div className="flex justify-between">
                <ul className="flex items-center gap-5">
                  <li>
                    <button className="bg-[#F1913D] text-white font-semibold px-3 py-1 rounded-md">
                      Featured
                    </button>
                  </li>
                  <li>
                    <button className="text-[#2A4766] font-semibold px-3 py-1 rounded-md shadow-md">
                      For {singleProperty.propertyFor}
                    </button>
                  </li>
                  <li>
                    <button className="text-[#2A4766] font-semibold">
                      Build year :
                      <span className="text-[#F1913D] font-bold text-lg ps-2">
                        {singleProperty.buildYear}
                      </span>
                    </button>
                  </li>
                </ul>
                <div>
                  <p className="text-[#2A4766] font-semibold text-2xl">
                    ${singleProperty.price}.00
                  </p>
                  <p className="text-end font-semibold text-[#77797a]">
                    {singleProperty.squareFoot} / SqFt
                  </p>
                </div>
              </div>
              <h3 className="mt-10 text-4xl font-semibold text-[#2A4766]">
                {singleProperty.propertyName}
              </h3>
              <div className="mt-7 font-semibold text-xl text-[#2A4766]">
                <li className="flex gap-3 items-center">
                  <IoLocationOutline className="text-[#F1913D] text-2xl" />
                  {singleProperty.address}, {singleProperty.city}
                </li>
              </div>
              {/* description */}

              <h5 className="mt-10 text-[#2A4766] text-2xl font-semibold capitalize">
                description:
              </h5>
              <p className="mt-2 text-[#77797a] pr-2">
                {singleProperty.description}
              </p>
            </div>
            {/* property details */}
            <div className="mt-10 shadow-md p-5 rounded-lg">
              <h5 className="text-[#2A4766] text-2xl font-semibold capitalize">
                Properties Details:
              </h5>
              <div className="flex gap-16 justify-between text-[#2A4766]">
                <ul className="w-full">
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Property type : </span>
                    <span className="text-[#77797a]">
                      {singleProperty.propertyCategory}
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Area Size : </span>
                    <span className="text-[#77797a]">
                      {singleProperty.squareFoot} SqFt
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Bedroom : </span>
                    <span className="text-[#77797a]">
                      0{singleProperty.bedroom}
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Garadge : </span>
                    <span className="text-[#F1913D]">
                      <GiCheckMark />
                    </span>
                  </li>
                </ul>
                <ul className="w-full">
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Build year : </span>
                    <span className="text-[#77797a]">
                      {singleProperty.buildYear}
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Price : </span>
                    <span className="text-[#77797a]">
                      ${singleProperty.price}.00
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Bathroom : </span>
                    <span className="text-[#77797a]">
                      0{singleProperty.bathroom}
                    </span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Security : </span>
                    <span className="text-[#F1913D]">
                      <GiCheckMark />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* whats nearby */}
            <div className="mt-10 shadow-md p-5 rounded-lg">
              <h5 className="text-[#2A4766] text-2xl font-semibold capitalize">
                What,s nearby?
              </h5>
              <p className="mt-2 text-[#77797a] pr-2">
                Explore nearby amenities to precisely locate your property and
                identify surrounding conveniences, providing a comprehensive
                overview of the living environment and the property,s
                convenience.
              </p>
              <div className="flex gap-16 justify-between text-[#2A4766]">
                <ul className="w-full">
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">School : </span>
                    <span className="text-[#77797a]">0.07 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">University : </span>
                    <span className="text-[#77797a]">2.3 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Grocery center : </span>
                    <span className="text-[#77797a]">0.3 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Market : </span>
                    <span className="text-[#77797a]">1.3 km</span>
                  </li>
                </ul>
                <ul className="w-full">
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Hospital : </span>
                    <span className="text-[#77797a]">2.3 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Metro station : </span>
                    <span className="text-[#77797a]">1.1 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">Gym, wellness : </span>
                    <span className="text-[#77797a]">0.9 km</span>
                  </li>
                  <li className="flex justify-between font-semibold border-b py-3 mt-4">
                    <span className="">River : </span>
                    <span className="text-[#77797a]">3.3 km</span>
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
