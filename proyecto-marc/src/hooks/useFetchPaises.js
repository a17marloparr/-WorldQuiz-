import React from "react";

import { useFetch } from "./useFetch";

export const useFetchPaises = () => {
    const { generalFetch, data, isLoading, hasError } = useFetch();

    const fetchPaises = () => {
        const url = "https://restcountries.com/v3.1/all";

        generalFetch(url);
    };

    return {
        fetchPaises,
        data,
        isLoading,
        hasError,
    };
}