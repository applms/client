import {
  ILoginData,
  ILoginRespone,
  IRegistrationData,
  IRegistrationResponse,
} from "@/types/store/auth";
import { apiSlice } from "../../api";
import { loginSuccess } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<IRegistrationResponse, IRegistrationData>({
      query: data => ({
        url: "users/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation<ILoginRespone, ILoginData>({
      query: ({ email, password }) => ({
        url: "auth",
        method: "POST",
        body: { email, password },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const token = result.meta?.response?.headers.get("x-auth-token");
          dispatch(loginSuccess({ user: result.data.user, token }));
        } catch (err: any) {
          console.log(err);
        }
      },
    }),
    logOut: builder.mutation<any, void>({
      query: () => ({
        url: "logout",
        method: "POST",
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // dispatch(userLoggedOut())
        } catch (err: any) {
          console.log(err);
        }
      },
    }),

    getProducts: builder.query({
      query: () => `/users`,
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogOutMutation,
  useGetProductsQuery,
} = authApi;
