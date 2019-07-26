import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);
  console.log(characters);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          name={character.name}
          species={character.species}
          origin={character.origin.name}
          image={character.image}
        />
      ))}
    </section>
  );
}
