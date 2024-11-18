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
  }),
});
export const { usePostUserMutation, useLoginUsersMutation } = UserApi;
