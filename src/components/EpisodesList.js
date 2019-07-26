import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList(props) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        console.log(response.data.results);
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="episode-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard
          key={episode.id}
          episode={episode}
          name={episode.name}
          airDate={episode.air_date}
          number={episode.id}
        />
      ))}
    </section>
  );
}
