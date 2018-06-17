import React from "react";
import PropTypes from "prop-types";

const defaultStyle = { textTransform: "capitalize", color: "#FFF" };

const getStyles = ({ name }) => {
  return {
    ...defaultStyle,
    backgroundColor: selectColor(name)
  };
};

const selectColor = name => {
  switch (name) {
    case "poison":
      return "#A040A0";
    case "grass":
      return "#78C850";
    case "bug":
      return "#A8B820";
    case "water":
      return "#6890F0";
    case "rock":
      return "#B8A038";
    default:
      return undefined;
  }
};

const PokemonType = ({ type }) => (
  <span className="tag" style={getStyles(type)}>
    {type.name}
  </span>
);

PokemonType.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default PokemonType;
