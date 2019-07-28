import React from "react";
import { Card } from "semantic-ui-react";

export default function CharacterCard(props) {
  return (
    <Card className="character-list">
      <span>
        <img className="character-image" src={props.image} alt="" />
        <div className="character-info">
          <h2 className="character-name">{props.name}</h2>
          <p className="character-status">{props.status}</p>
          <p className="character-species">Species: {props.species}</p>
          <p className="character-origin">Origin: {props.origin}</p>
        </div>
      </span>
    </Card>
  );
}
