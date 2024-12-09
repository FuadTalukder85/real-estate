import { BaseApi } from "../api/BaseApi";
const ContactApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    postContact: builder.mutation({
      query: (postContact) => ({
        url: "/contactMsg",
        method: "POST",
        body: postContact,
      }),
    }),
    getContact: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
        next: {
          revalidate: 3,
        },
        cache: "no-store",
      }),
    }),
    getSingleContact: builder.query({
      query: (_id) => ({
        url: `/contact/${_id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  usePostContactMutation,
  useGetContactQuery,
  useGetSingleContactQuery,
} = ContactApi;
