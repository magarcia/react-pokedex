import React from 'react';
import PropTypes from 'prop-types';

const getStyles = ({name}) => {
  return {
    backgroundColor: selectColor(name),
  };
};

const selectColor = name => {
  switch (name) {
    case 'normal':
      return '#A8A77A';
    case 'fire':
      return '#ee8130';
    case 'water':
      return '#6390f0';
    case 'electric':
      return '#f7d02c';
    case 'grass':
      return '#7ac74c';
    case 'ice':
      return '#96d9d6';
    case 'fighting':
      return '#c22e28';
    case 'poison':
      return '#a33ea1';
    case 'ground':
      return '#e2bf65';
    case 'flying':
      return '#a98ff3';
    case 'psychic':
      return '#f95587';
    case 'bug':
      return '#a6b91a';
    case 'rock':
      return '#b6a136';
    case 'ghost':
      return '#735797';
    case 'dragon':
      return '#6f35fc';
    case 'dark':
      return '#705746';
    case 'steel':
      return '#b7b7ce';
    case 'fairy':
      return '#d685ad';
    default:
      return undefined;
  }
};

const PokemonType = ({type}) => (
  <span
    className="tag is-medium is-capitalized has-text-white"
    style={getStyles(type)}
  >
    {type.name}
  </span>
);

PokemonType.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonType;
