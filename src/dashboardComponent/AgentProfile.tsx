"use client";
import Image from "next/image";
import profileBanner from "../assets/images/house01.jpg";
import useCurrentUser from "../hooks/CurrentUser";
const AgentProfile = () => {
  const currentUser = useCurrentUser();
  if (!currentUser) {
    <div className="flex items-center mt-36 justify-center">
      <p>Loading...</p>
    </div>;
  }
  return (
    <div className="bg-white shadow-md md:w-96 p-3 md:pb-7 rounded-3xl">
      <Image
        className="h-40 rounded-t-3xl"
        src={profileBanner}
        alt="profileBanner"
      ></Image>
      <div className="">
        <div className="-mt-16 flex justify-center rounded-3xl">
          <Image
            className="w-40 rounded-3xl bg-white p-2"
            src={currentUser?.image || "/image"}
            alt="profileImg"
            width={60}
            height={60}
          ></Image>
        </div>
        <ul className="text-light text-center">
          <li className=" text-seaBlue font-semibold text-lg">
            <p>{currentUser?.name}</p>
          </li>
          <li>{currentUser?.email}</li>
          <li>{currentUser?.address}</li>
        </ul>
        <div className="flex gap-1 md:gap-3 mt-5 justify-center font-semibold">
          <button className="px-3 py-1 text-white rounded-lg bg-yellow">
            My Property : 21
          </button>
          <button className="px-3 py-1 text-white rounded-lg bg-yellow">
            Total Review : 61
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
