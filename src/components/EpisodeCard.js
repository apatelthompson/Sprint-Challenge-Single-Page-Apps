import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard(props) {
  return (
    <Card>
      <span className="episode-list">
        <h2 className="episode-name">{props.name}</h2>
        <h4 className="episode-number">Episode #: {props.number}</h4>
        <p className="episode-air-date">Airdate: {props.airDate}</p>
      </span>
    </Card>
  );
}
