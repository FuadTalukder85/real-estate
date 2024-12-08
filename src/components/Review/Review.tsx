"use client";
import Image from "next/image";
import proImg from "../../assets/images/profileImg01.jpg";
import ReviewForm from "./ReviewForm";
import { useGetReviewQuery } from "../../redux/reviewApi/reviewApi";

const Review = ({ email }) => {
  const { data } = useGetReviewQuery("");
  const matchReview = data?.filter((dt) => dt.reviewGet === email);
  return (
    <div>
      <div className="text-2xl font-bold text-[#2A4766] mt-16">
        {matchReview?.length === 0 ? (
          <p>
            <span>{matchReview?.length} Reviews</span>
            <span>No one has reviewed yet</span>
          </p>
        ) : (
          <p>{matchReview?.length} Reviews</p>
        )}
      </div>
      <div className="grid grid-cols-12 gap-10 mt-5 text-[#2A4766]">
        <div className="col-span-7">
          {matchReview?.map((review) => (
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
                <h3 className="text-xl font-bold">{review.name}</h3>
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
          <ReviewForm email={email}></ReviewForm>
        </div>
      </div>
    </div>
  );
};

export default Review;
