import React from 'react';

import paises from './countries.json';

export const useFetchCountries = () => {
  return {
    paises
  }
};

export default useFetchCountries;