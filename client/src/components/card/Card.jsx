import React from "react";
import "./card.css"

export default function Card({name, image, types }){

  const typesMapped = types?.map((e) => (
    <h5 key={e}>{e[0].toUpperCase() + e.slice(1)}</h5>
  ));

  return(
    <div className="contenedor_card">
      <div className="card">
        <img src= {image} alt="img not found" className="img_card"/>
        <h3 className="poke_name_card">{name}</h3>
        <div className="types_card">{typesMapped}</div>  
      </div>
    </div>
  )
}


