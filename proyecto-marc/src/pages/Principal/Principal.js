import React from "react";
import { Link } from "react-router-dom";

import logo from '../../img/WorldQuiz_Logo.png'
import './Principal.css'

export default function Principal() {
  return (
    <div>
      <div className="imagen">
        <img src={logo} className="logo"></img>
      </div>
      <div className="botones">
        <div className="boton">
          <Link to="/play">Play</Link>
        </div>
        <div className="boton">
          <Link to="/countries">Countries</Link>
        </div>
      </div>
    </div>
  );
}