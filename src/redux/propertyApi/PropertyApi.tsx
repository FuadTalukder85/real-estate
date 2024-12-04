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
    getSingleProperty: builder.query({
      query: (_id) => ({
        url: `/property/${_id}`,
        method: "GET",
      }),
    }),
    updateProperty: builder.mutation({
      query: ({ id, body }) => ({
        url: `/property/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});
export const {
  usePostPropertyMutation,
  useGetPropertyQuery,
  useDeletePropertyMutation,
  useGetSinglePropertyQuery,
  useUpdatePropertyMutation,
} = PropertyApi;
