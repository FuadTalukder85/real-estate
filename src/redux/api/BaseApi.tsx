import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BaseApi = createApi({
  reducerPath: "BaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
