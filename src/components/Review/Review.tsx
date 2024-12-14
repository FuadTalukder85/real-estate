"use client";
import Image from "next/image";
import proImg from "../../assets/images/profileImg01.jpg";
import ReviewForm from "./ReviewForm";
import { useGetReviewQuery } from "../../redux/reviewApi/reviewApi";
import { TReview } from "../../types/types";
import { useEffect } from "react";

const Review = ({ email }: { email: string }) => {
  const { data, refetch } = useGetReviewQuery("");
  const matchReview = data?.filter((dt: TReview) => dt.reviewGet === email);
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [refetch]);
  return (
    <div>
      <div className="grid grid-cols-12 gap-10 mt-16 text-seaBlue">
        <div className="col-span-7 shadow-md p-3 rounded-lg">
          <div className="text-2xl font-bold text-seaBlue">
            {matchReview?.length === 0 ? (
              <p>
                <span>{matchReview?.length} Reviews</span>
                <span>No one has reviewed yet</span>
              </p>
            ) : (
              <p>{matchReview?.length} Reviews</p>
            )}
          </div>
          {matchReview?.map((review: TReview) => (
            <div key={review._id} className="flex gap-3 mt-5">
              <div>
                <Image
                  className="rounded-lg"
                  src={proImg}
                  alt="proImg"
                  width={200}
                  height={200}
                ></Image>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm">{review.date}</p>
                <p className="mt-3">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-5">
          <div className="shadow-md p-3 rounded-lg">
            <h5 className="text-2xl font-bold text-seaBlue">Leave a review</h5>
            <ReviewForm email={email}></ReviewForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
