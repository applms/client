import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.18:3000/api/",
    prepareHeaders: headers => {
      headers.set("Accept", "application/json");

      // if (localStorage.getItem("auth_token")) {
      //   headers.set("authorization", `Bearer ${localStorage.getItem("auth_token")}`);
      // }
      return headers;
    },
  }),
  endpoints: builder => ({
    loadUser: builder.query({
      query: () => "me",
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          // dispatch(userLoggedIn({user: result.data}))
        } catch (err: any) {
          console.log(err);
        }
      },
    }),
  }),
});
