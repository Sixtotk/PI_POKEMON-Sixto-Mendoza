import React from "react";
import "./card.css";

export default function Card({ name, image, types }) {
  const typesMapped = types?.map((type) => (
    <h5 key={type.name}>{type.name[0].toUpperCase() + type.name.slice(1)}</h5>
  ));

  return (
    <div className="contenedor_card">
      <div className="card">
        <img src={image} alt="img not found" className="img_card" />
        <h3 className="poke_name_card">{name}</h3>
        <div className="types_card">{typesMapped}</div>
      </div>
    </div>
  );
}

