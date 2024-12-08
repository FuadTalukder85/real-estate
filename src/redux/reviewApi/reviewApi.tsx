import { BaseApi } from "../api/BaseApi";
const ReviewApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: (postReview) => ({
        url: "/review",
        method: "POST",
        body: postReview,
      }),
    }),
    getReview: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
        next: {
          revalidate: 3,
        },
        cache: "no-store",
      }),
    }),
  }),
});
export const { usePostReviewMutation, useGetReviewQuery } = ReviewApi;
