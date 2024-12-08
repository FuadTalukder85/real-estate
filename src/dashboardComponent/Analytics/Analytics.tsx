"use client";
import React, { useEffect } from "react";
import { BsHouseCheck } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import {
  MdOutlineAppRegistration,
  MdOutlineReviews,
  MdPendingActions,
} from "react-icons/md";
import { useGetAllStatsQuery } from "../../redux/allStatsApi/AllStatsApi";

const Analytics = () => {
  const { data, refetch } = useGetAllStatsQuery("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [refetch]);
  return (
    <div className="px-10 mt-10 text-[#2A4766]">
      <h5 className="font-semibold">Analytics</h5>
      <div className="flex gap-5 justify-between mt-5">
        {/* card 01 */}
        <div className="w-full flex gap-8 items-center bg-white p-5 shadow-md">
          <BsHouseCheck className="text-5xl text-[#ffac37]" />
          <div>
            <p className="text-[#2A4766]">No. of Property</p>
            <span className="text-2xl font-semibold text-[#2A4766]">
              {data?.totalProperty}
            </span>
          </div>
        </div>
        {/* card 02 */}
        <div className="w-full flex gap-8 items-center bg-white p-5 shadow-md">
          <MdOutlineAppRegistration className="text-5xl text-[#ffac37]" />
          <div>
            <p className="text-[#2A4766]">Regi. Agents</p>
            <span className="text-2xl font-semibold text-[#2A4766]">
              {data?.totalAgent}
            </span>
          </div>
        </div>
        {/* card 03 */}
        <div className="w-full flex gap-8 items-center bg-white p-5 shadow-md">
          <MdPendingActions className="text-5xl text-[#ffac37]" />
          <div>
            <p className="text-[#2A4766]">Pending Property</p>
            <span className="text-2xl font-semibold text-[#2A4766]">
              {data?.pendingProperty}
            </span>
          </div>
        </div>
        {/* card 04 */}
        <div className="w-full flex gap-8 items-center bg-white p-5 shadow-md">
          <GrFavorite className="text-5xl text-[#ffac37]" />
          <div>
            <p className="text-[#2A4766]">Favorite</p>
            <span className="text-2xl font-semibold text-[#2A4766]">1100</span>
          </div>
        </div>
        {/* card 05 */}
        <div className="w-full flex gap-8 items-center bg-white p-5 shadow-md">
          <MdOutlineReviews className="text-5xl text-[#ffac37]" />
          <div>
            <p className="text-[#2A4766]">Reviews</p>
            <span className="text-2xl font-semibold text-[#2A4766]">
              {data?.totalReview}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
