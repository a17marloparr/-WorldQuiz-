import React from "react";
import CardPaises from "../CardPaises/CardPaises";

import './Europe.css'

export default function Europe(props) {
  function createCard(data) {
    return (
      <CardPaises
        key = {data.europe.name.common}
        bandera = {data.europe.flags.png}
        nombre = {data.europe.name.common}
        continente = {data.europe.continents}
        capital = {data.europe.capital}
        lengua = {Object.values(data.europe.languages)}
        area = {data.europe.area.toLocaleString("en-US")}
        poblacion = {data.europe.population.toLocaleString("en-US")}
      />
    )
  }

  return (
    <div className="europeBody">
      {createCard(props)}
    </div>
  );
}