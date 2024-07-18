import React, { useState } from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import useAxios from "./hooks/useAxios";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/pikachu');  
  const [pokemon, addPokemon] = useAxios(url);    

  // Changed code
// Added url state to change and update the url for when a card is called
// This cleans up duplicate code from original design
  const changeUrl = term => {
    setUrl(`https://pokeapi.co/api/v2/pokemon/${term}`);   
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} url={changeUrl} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>    
    </div>
  );
}

export default PokeDex;
