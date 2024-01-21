import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./base";

export const counterApi = createApi({
    reducerPath: "submissionApi",
    baseQuery,
    endpoints: (builder) => ({
        baseCounter: builder.query({
            query: () => `/base/up`
        }),
        buttonCounter: builder.query({
            query: () => `/button/`
        }),
        buttonCounterUp: builder.query({
            query: () => `/button/up`
        }),
    })
});

export const { useBaseCounterQuery, useButtonCounterQuery, useButtonCounterUpQuery  } = counterApi;
