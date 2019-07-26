import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        // console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          name={character.name}
          species={character.species}
          origin={character.origin.name}
          status={character.status}
          image={character.image}
        />
      ))}
    </section>
  );
}
