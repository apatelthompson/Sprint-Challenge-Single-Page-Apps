import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  // image={image}
  return (
    <span>
      <h2 className="location-name">{name}</h2>
      <p className="location-type">Type: {type}</p>
      <p className="location-species">Dimension: {dimension}</p>
      <p className="location-origin">Residents: {residents}</p>
    </span>
  );
}
