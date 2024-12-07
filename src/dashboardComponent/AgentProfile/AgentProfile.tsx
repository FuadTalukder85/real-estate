"use client";
import Image from "next/image";
import profileBanner from "../../assets/images/house01.jpg";
import useCurrentUser from "../../hooks/CurrentUser";
const AgentProfile = () => {
  const currentUser = useCurrentUser();
  if (!currentUser) {
    <p>Loading...</p>;
  }
  return (
    <div className="bg-white shadow-md w-96 pb-7 rounded-3xl">
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
        <ul className="text-[#2A4766] text-center">
          <li className="font-semibold text-lg">
            <p>{currentUser?.name}</p>
          </li>
          <li>{currentUser?.email}</li>
          <li>{currentUser?.address}</li>
        </ul>
        <div className="flex gap-3 mt-5 justify-center text-[#2A4766] font-semibold">
          <button className="px-3 py-1 text-white rounded-lg bg-[#FFAC37]">
            My Property : 21
          </button>
          <button className="px-3 py-1 text-white rounded-lg bg-[#FFAC37]">
            Total Review : 61
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
