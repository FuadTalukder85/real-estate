import { BaseApi } from "../api/BaseApi";
const AllStatsApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStats: builder.query({
      query: () => ({
        url: "/allstats/count",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllStatsQuery } = AllStatsApi;
