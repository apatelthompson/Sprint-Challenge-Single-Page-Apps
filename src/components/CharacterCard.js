import React from "react";

export default function CharacterCard(props) {
  return (
    <span>
      <img className="character-image" src={props.image} alt="" />
      <h2 className="character-name">{props.name}</h2>
      <h4 className="character-species">{props.species}</h4>
      <p className="character-origin">{props.origin}</p>
    </span>
  );
}
