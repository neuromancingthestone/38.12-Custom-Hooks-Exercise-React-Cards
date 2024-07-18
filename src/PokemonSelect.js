import React, { useEffect, useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */
// Added code
// Also set the url to the one assigned from the dropdown
function PokemonSelect({ add, pokemon = pokemonList, url }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
    url(pokemon[evt.target.value]);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      { /* 
      Added code
      I'm Feeling Lucky button will now update url then add in the pokemon
      */ }
      <button onClick={() => add(pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={async function () {
        const c = choice(pokemon);
        console.log(c);
        url(c);
        add(c);
      }}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
