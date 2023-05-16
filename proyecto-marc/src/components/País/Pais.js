import React, { useState } from "react";
import { useFetchCountries } from "../../hooks/useFetchCountries";

import './Pais.css';

export default function Pais() {
  const { paises } = useFetchCountries();
  const [pais, setPais] = useState();

  function busquedaPais() {
    setPais(paises[Math.floor(Math.random() * paises.length)]);
    console.log(pais)
  }

  return (
    <div>
      <div className="divPlayButton"><button onClick={busquedaPais} className="playButton">PLAY</button></div>
      {pais === undefined ? <div></div> :
        <div className="cardBodyPlay">
          <div className="namePlay">{pais["common"]}</div>
          <div><img src={pais["flags"]} className="playImg"></img></div>
          <div className="questionPlay">Question?</div>
          <div className="optionsPlay">
            <div className="optionRed">{JSON.stringify(pais["capital"])}</div>
            <div className="optionBlue">{JSON.stringify(paises[Math.floor(Math.random() * paises.length - 1)]["capital"])}</div>
            <div className="optionYellow">{JSON.stringify(paises[Math.floor(Math.random() * paises.length - 1)]["capital"])}</div>
            <div className="optionGreen">{JSON.stringify(paises[Math.floor(Math.random() * paises.length - 1)]["capital"])}</div>
          </div>
        </div>
      }
    </div>
  );
}