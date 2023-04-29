import React, { useState } from "react";

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const generalFetch = (url) => {
        setIsLoading(true);
        setHasError(false);

        fetch(url)
          .then((response) => response.json())
          .then((jsonResponse) => {
            setData(jsonResponse);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setHasError(true);
          });
    };

    return {
        generalFetch,
        data,
        isLoading,
        hasError,
    };
};