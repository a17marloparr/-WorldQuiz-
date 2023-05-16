import React from "react";
import CardPaises from "../CardPaises/CardPaises";

import './Europe.css'

export default function Europe(props) {
  const numberFormat = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
  }

  function createCard(data) {
    return (
      <CardPaises
        key = {data.europe.capital}
        bandera = {data.europe.flags}
        nombre = {data.europe.common}
        continente = {data.europe.continents}
        capital = {data.europe.capital}
        lengua = {data.europe.languages}
        area = {numberFormat(data.europe.area)}
        poblacion = {numberFormat(data.europe.population)}
      />
    )
  }

  return (
    <div className="europeBody">
      {createCard(props)}
    </div>
  );
}