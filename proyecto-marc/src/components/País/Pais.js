import React, { useEffect, useState } from "react";
import { useFetchPaises } from "../../hooks/useFetchPaises";

import './Pais.css';

export default function Pais() {
  const {data, fetchPaises, isLoading, hasError} = useFetchPaises();
  const [pais, setPais] = useState();

  function busquedaPais() {
    fetchPaises();
  }

  useEffect(() => {
    setPais(data[Math.floor(Math.random() * data.length)]);
  }, [data])

  return (
    <div>
      <div className="divPlayButton"><button onClick={busquedaPais} className="playButton">PLAY</button></div>
      { pais === undefined ? <div></div> :
          <div className="cardBodyPlay">
            <div className="namePlay">{pais["name"]["common"]}</div>
            <div><img src={pais["flags"]["png"]} className="playImg"></img></div>
            <div className="questionPlay">Question?</div>
            <div className="optionsPlay">
              <div className="optionRed">{JSON.stringify(pais["capital"][0])}</div>
              <div className="optionBlue">{JSON.stringify(data[Math.floor(Math.random() * data.length - 1)]["capital"][0])}</div>
              <div className="optionYellow">{JSON.stringify(data[Math.floor(Math.random() * data.length - 1)]["capital"][0])}</div>
              <div className="optionGreen">{JSON.stringify(data[Math.floor(Math.random() * data.length - 1)]["capital"][0])}</div>
            </div>
          </div>
      }
    </div>
  );
}