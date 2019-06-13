import React from 'react';
import {padNumber} from '../utils';
import {BASENAME} from '../Constants';

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
  if (name === 'unown') {
    return `${name}-a`;
  }
  if (name === 'spinda') {
    return `${name}-1`;
  }
  if (name === 'castform') {
    return `${name}-normal`;
  }
  if (name === 'burmy') {
    return `${name}-plant`;
  }
  if (name === 'vespiquen') {
    return 'vespiqueen';
  }
  if (name === 'cherrim') {
    return 'cherim-overcast';
  }
  if (name === 'shellos') {
    return 'shellos-east';
  }
  if (name === 'gastrodon') {
    return 'gastrodon-east';
  }
  if (name === 'mime-jr') {
    return 'mimejr';
  }
  if (name === 'lickilicky') {
    return 'lickilicki';
  }
  if (name === 'ho-oh') {
    return 'hooh';
  }
  return name;
};

const PokemonImage = ({id, name, size = 100, animate = false}) => (
  <div style={{padding: 20}}>
    <img
      src={`${BASENAME}/pokemons/${padNumber(id, 3)}-${fixNames(name)}.svg`}
      style={{height: size, width: size}}
      alt={name}
    />
  </div>
);

export default PokemonImage;
