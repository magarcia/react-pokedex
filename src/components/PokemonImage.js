import React from 'react';
import {padNumber} from '../utils';
import pokemonSymbols from '../pokemon-symbols.svg';

const fixNames = name => {
  if (name === 'sceptile') {
    return 'sceptille';
  }
  if (name === 'jirachi') {
    return 'lirachi';
  }
  if (name === 'ninjask') {
    return 'niniask';
  }
  if (name === 'baltoy') {
    return 'baltov';
  }
  if (name === 'claydol') {
    return 'clavdol';
  }
  if (name.includes('deoxys')) {
    return 'deoxys';
  }
  return name;
};

const PokemonImage = ({id, name, size = 100, animate = false}) => (
  <figure
    style={{padding: 50}}
    className={`pokemon-image image is-4by3 ${animate ? 'animate' : ''}`}
  >
    <svg style={{height: size, width: size}}>
      <use
        xlinkHref={`${pokemonSymbols}#${padNumber(id, 3)}-${fixNames(name)}`}
      />
    </svg>
  </figure>
);

export default PokemonImage;
