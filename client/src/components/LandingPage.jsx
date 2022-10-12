import React from "react";
import { Link } from "react-router-dom";
import ImagenLanding from "./imagenes/basic-pokeball-cover-mcs4xg2ash4hj4e9.jpg"
import Bienvenida from "./imagenes/f692fa9b3e13658a642fec16ea00ee7e.png"
import "./LandingPage.css"

export default function LandingPage(){
  return(
    <div>
      <Link to ='/home'>
        <button className="botonLanding">Ingresar</button>
      </Link>
      <div className="grid-container">
        <img className="imgLanding" src={ImagenLanding} alt="landing"/>
        <img className="imgLanding" src={Bienvenida} alt="bienvenida"/>
      </div>
      
    </div>
  )
}