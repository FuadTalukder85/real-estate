import { BaseApi } from "../api/BaseApi";
const PropertyApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    postProperty: builder.mutation({
      query: (postProperty) => ({
        url: "/property",
        method: "POST",
        body: postProperty,
      }),
    }),
  }),
});
export const { usePostPropertyMutation } = PropertyApi;
