import React from "react";
import { Link } from "react-router-dom";
import pokemon from "../../img/International_Pokémon_logo.svg.png"
import pikachu from '../../img/PLP_Hero_Characters_Pokemon.png'
import empezar from '../../img/empezar.png'
import './landin.css'

let LandinPage = () => {
  return(
    <div class="principal">
      <div class="zona-amarilla">
        <img class="img-logo" src={pokemon} alt="pokemon"/>

      </div>
      <div class="zona-roja">
        <img class="img-pikachu" src={pikachu} alt="pokemon"/>
        <Link to ='/home'>
        <button class="boton-landin">
        <img class="img-empezar" src={empezar} alt="pokemon"/>
        </button>
        </Link>

      </div>
    </div>
  )

}

export default LandinPage;