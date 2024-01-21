import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export * from "./mutation-helper";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.counterapi.dev/v1/mrmihi",
});

export default baseQuery;