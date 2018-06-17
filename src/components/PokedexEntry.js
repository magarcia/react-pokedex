import React from 'react';
import {Link} from 'react-router-dom';
import {padNumber} from '../utils';
import PokemonImage from './PokemonImage';

const PokedexEntry = ({name, id}) => (
  <div className="pokedex-entry column is-3">
    <div className="pokemoncard has-text-centered">
      <Link to={`/pokemon/${padNumber(id, 3)}`}>
        <div className="pokemoncard-image has-background-light">
          {/* <i className="material-icons fav">favorite_border</i> */}
          <PokemonImage id={id} name={name} />
        </div>
        <div className="pokemoncard-content">
          <h1 className="title is-4 is-capitalized">{name}</h1>
          <p className="subtitle is-6">#{padNumber(id, 3)}</p>
        </div>
      </Link>
    </div>
  </div>
);

export default PokedexEntry;
