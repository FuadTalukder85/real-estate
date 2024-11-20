import { BaseApi } from "../api/BaseApi";
const PropertyApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    postProperty: builder.mutation({
      query: (postProperty) => ({
        url: "/property",
        method: "POST",
        body: postProperty,
        cache: "no-store",
      }),
    }),
    getProperty: builder.query({
      query: () => ({
        url: "/property",
        method: "GET",
        next: {
          revalidate: 30,
        },
        cache: "no-store",
      }),
    }),
    deleteProperty: builder.mutation({
      query: (query) => ({
        url: `/property/${query}`,
        method: "DELETE",
        cache: "no-store",
      }),
    }),
  }),
});
export const {
  usePostPropertyMutation,
  useGetPropertyQuery,
  useDeletePropertyMutation,
} = PropertyApi;
