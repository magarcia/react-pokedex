import React, {Fragment} from 'react';
import {
  API,
  MAX_POKEMONS,
  MAX_POKEMONS_GEN,
  MAX_POKEMONS_GEN_I,
  MAX_POKEMONS_GEN_II,
  MAX_POKEMONS_GEN_III,
  MAX_POKEMONS_GEN_IV,
} from '../Constants';
import GenerationSelector from '../components/GenerationSelector';
import PokedexEntry from '../components/PokedexEntry';
import withFetching from '../components/withFetching';

const getValidGeneration = generationString => {
  if (generationString === 'all') {
    return generationString;
  }
  const generation = parseInt(generationString, 10);
  return (Math.min(Math.max(generation, 1), 4) || 'all').toString();
};

const getLimitsFromGeneration = generation => {
  let limit;
  let offset;
  switch (generation) {
    case 'all':
      limit = MAX_POKEMONS;
      offset = 0;
      break;
    case '1':
      limit = MAX_POKEMONS_GEN_I;
      offset = 0;
      break;
    case '2':
      limit = MAX_POKEMONS_GEN_II - MAX_POKEMONS_GEN_I;
      offset = MAX_POKEMONS_GEN_I;
      break;
    case '3':
      limit = MAX_POKEMONS_GEN_III - MAX_POKEMONS_GEN_II;
      offset = MAX_POKEMONS_GEN_II;
      break;
    case '4':
      limit = MAX_POKEMONS_GEN_IV - MAX_POKEMONS_GEN_III;
      offset = MAX_POKEMONS_GEN_III;
      break;
    default:
      limit = MAX_POKEMONS;
      offset = 0;
      break;
  }
  return [limit, offset];
};

const generationUrlBuilder = props => {
  const generation = getValidGeneration(props.match.params.generation);
  const [limit, offset] = getLimitsFromGeneration(generation);

  return `${API}?limit=${limit}&offset=${offset}`;
};

const Pokedex = ({results, match}) => {
  const generation = getValidGeneration(match.params.generation);
  const prevGeneration = generation - 1 || 0;
  const [limit, offset] = getLimitsFromGeneration(generation);
  return (
    <Fragment>
      <GenerationSelector currentGeneration={generation} />
      <div className="columns is-multiline">
        {results.slice(0, offset + limit).map((entry, index) => (
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

export default withFetching(generationUrlBuilder)(Pokedex);
