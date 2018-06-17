import React, { Fragment } from "react";
import {
  API,
  MAX_POKEMONS,
  MAX_POKEMONS_GEN,
  MAX_POKEMONS_GEN_I,
  MAX_POKEMONS_GEN_II,
  MAX_POKEMONS_GEN_III
} from "../Constants";
import withFetching from "../components/withFetching";
import PokedexEntry from "../components/PokedexEntry";
import GenerationSelector from "../components/GenerationSelector";

const getValidGeneration = generationString => {
  if (generationString === "all") return generationString;
  const generation = parseInt(generationString, 10);
  return (Math.min(Math.max(generation, 1), 3) || "all").toString();
};

const Pokedex = ({ results, match }) => {
  const generation = getValidGeneration(match.params.generation);
  const prevGeneration = generation - 1 || 0;
  return (
    <Fragment>
      <GenerationSelector currentGeneration={generation} />
      <div className="columns is-multiline">
        {results.map((entry, index) => (
          <PokedexEntry
            name={entry.name}
            id={index + 1 + MAX_POKEMONS_GEN[prevGeneration]}
            key={index}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default withFetching(props => {
  const generation = getValidGeneration(props.match.params.generation);
  let limit, offset;

  switch (generation) {
    case "all":
      limit = MAX_POKEMONS;
      offset = 0;
      break;
    case "1":
      limit = MAX_POKEMONS_GEN_I;
      offset = 0;
      break;
    case "2":
      limit = MAX_POKEMONS_GEN_II - MAX_POKEMONS_GEN_I;
      offset = MAX_POKEMONS_GEN_I;
      break;
    case "3":
      limit = MAX_POKEMONS_GEN_III - MAX_POKEMONS_GEN_II;
      offset = MAX_POKEMONS_GEN_II;
      break;
    default:
      limit = MAX_POKEMONS;
      offset = 0;
      break;
  }

  return `${API}?limit=${limit}&offset=${offset}`;
})(Pokedex);
