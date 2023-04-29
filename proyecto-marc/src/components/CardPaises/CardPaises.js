import React from "react";

import './CardPaises.css';

function CardPaises(props) {
  return (
    <div className="cardBody">
      <div className="cardInfo">
        <div>
          <div className="continenteCardPaises">{props.continente}</div>
        </div>
        <div>
          <img src={props.bandera} className="imgCardPaises"></img>
        </div>
        <div>
          <div>
            <div className="nombreCardPaises">{props.nombre}</div>
            <div className="datosCardPaises">
              <p>Capital: <span className="colorDatosCardPaises">{props.capital}</span></p>
              <p>Area: <span className="colorDatosCardPaises">{props.area} km2</span></p>
              <p>Population: <span className="colorDatosCardPaises">{props.poblacion}</span></p>
              <p>Official language: <span className="colorDatosCardPaises">{props.lengua.join(', ')}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPaises;