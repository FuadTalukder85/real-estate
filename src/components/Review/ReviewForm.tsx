import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePostReviewMutation } from "../../redux/reviewApi/reviewApi";
import toast, { Toaster } from "react-hot-toast";

const ReviewForm = ({ email }) => {
  const [postReview] = usePostReviewMutation();
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler = async (data) => {
    try {
      const reviewGet = email;
      const postedData = { ...data, reviewGet, rating };
      await postReview(postedData);
      toast.success("Review added successfully!", { position: "top-right" });
      reset();
    } catch (error) {
      console.error("Add review failed", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toaster />
      <div className="space-y-4">
        <div className="flex gap-3">
          <div>
            <label className="font-semibold text-sm" htmlFor="">
              Your Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.name && (
              <p className="text-red-400">This field is required</p>
            )}
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="">
              Your Email
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-red-400">This field is required</p>
            )}
          </div>
        </div>
        <div>
          <label className="font-semibold text-sm" htmlFor="">
            Rate the Agent
          </label>
          <Rating
            style={{ maxWidth: 120 }}
            value={rating}
            onChange={setRating}
          />
        </div>
        <div>
          <label className="font-semibold text-sm" htmlFor="">
            Write a Review
          </label>
          <textarea
            {...register("review", { required: true })}
            rows={4}
            type="text"
            placeholder="Write your review here..."
            className="w-full border border-gray-300 rounded-md shadow-sm mt-1 p-2 row-span-5"
          />
          {errors.review && (
            <p className="text-red-400">This field is required</p>
          )}
        </div>
      </div>
      <div className="">
        <button
          type="submit"
          className="mt-5 bg-[#ffac37] text-white py-3 px-6 rounded-md uppercase font-semibold hover:bg-[#2A4766] transition-all duration-700"
        >
          Post review
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
