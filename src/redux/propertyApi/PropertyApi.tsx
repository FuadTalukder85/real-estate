import { BaseApi } from "../api/BaseApi";
const PropertyApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    postProperty: builder.mutation({
      query: (postComment) => ({
        url: "/property",
        method: "POST",
        body: postComment,
      }),
    }),
  }),
});
export const { usePostPropertyMutation } = PropertyApi;
