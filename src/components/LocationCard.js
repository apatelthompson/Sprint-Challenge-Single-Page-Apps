import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  // image={image}
  return (
    <Card>
      <span className="location-list">
        <h2 className="location-name">{name}</h2>
        <p className="location-type">Type: {type}</p>
        <p className="location-species">Dimension: {dimension}</p>
        <p className="location-residents">Residents: {residents.length}</p>
      </span>
    </Card>
  );
}
