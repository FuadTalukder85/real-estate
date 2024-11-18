import { BaseApi } from "../api/BaseApi";
const UserApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (postUser) => ({
        url: "/register",
        method: "POST",
        body: postUser,
      }),
    }),
    loginUsers: builder.mutation({
      query: (loggedUser) => ({
        url: "/login",
        method: "POST",
        body: loggedUser,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});
export const { usePostUserMutation, useLoginUsersMutation, useGetUserQuery } =
  UserApi;
