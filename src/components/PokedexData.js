import React from 'react';
import PropTypes from 'prop-types';
import PokemonType from './PokemonType';
import PokedexDataInfo from './PokedexDataInfo';
import {capitalize} from '../utils';

function toFeet(meters) {
  const realFeet = (meters * 0.3937) / 12;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);
  return feet + '′' + inches + '´´';
}

const formatHeight = height => {
  return `${toFeet(height * 10)} (${height / 10}m)`;
};

const formatWeight = weight => {
  const lbs = Math.floor(weight * 22.046) / 100;
  return `${lbs} lbs  (${weight / 10}kg)`;
};

const PokedexData = ({id, types, height, weight, abilities}) => (
  <div className="columns is-multiline is-mobile">
    <PokedexDataInfo label="Height" value={formatHeight(height)} />
    <PokedexDataInfo
      label="Type"
      value={
        <div className="tags">
          {types
            .sort((t1, t2) => t1.slot - t2.slot)
            .map(type => (
              <PokemonType {...type} key={type.slot} />
            ))}
        </div>
      }
    />
    <PokedexDataInfo label="Weight" value={formatWeight(weight)} />
    <PokedexDataInfo
      label="Abilities"
      value={abilities
        .sort((a1, a2) => a1.slot - a2.slot)
        .filter(ab => !ab.is_hidden)
        .map(ab => capitalize(ab.ability.name))
        .join(', ')}
    />
  </div>
);

PokedexData.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  height: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  weight: PropTypes.number.isRequired,
};

export default PokedexData;
