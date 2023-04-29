import { Link } from "react-router-dom";

import logo from '../../img/WorldQuiz_MiniLogo.png'

import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navegacion">
      <div className="imagenNavegacion">
        <Link to="/"> <img src={logo} className="logoNavegacion"></img> </Link>
      </div>
      <div className="loginNavegacion">
        <a className="logIn" href="/login">Log in</a>
        <a className="signUp" href="/singup">Sign up</a>
      </div>
    </div>
  );
}