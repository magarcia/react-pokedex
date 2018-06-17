import React from "react";
import PropTypes from "prop-types";
import PokemonType from "./PokemonType";
import { capitalize } from "../utils";

function toFeet(n) {
  var realFeet = (n * 0.3937) / 12;
  var feet = Math.floor(realFeet);
  var inches = Math.round((realFeet - feet) * 12);
  return feet + "′" + inches + "´´";
}

const formatHeight = height => {
  return `${toFeet(height * 10)} (${height / 10}m)`;
};

const formatWeight = weight => {
  const lbs = Math.floor(weight * 22.046) / 100;
  return `${lbs} lbs  (${weight / 10}kg)`;
};

const entry = (label, value) => (
  <div className="column is-half">
    <h1
      className="subtitle is-5 has-text-weight-light"
      style={{ marginBottom: "0.5rem" }}
    >
      {label}
    </h1>
    <h2
      className="subtitle is-5 has-text-weight-normal"
      style={{ marginTop: "0.5rem" }}
    >
      {value}
    </h2>
  </div>
);

const PokedexData = ({ id, types, height, weight, abilities }) => (
  <div className="columns is-multiline is-mobile">
    {entry("Height", formatHeight(height))}
    {entry(
      "Type",
      <div className="tags">
        {types
          .sort((a, b) => a.slot - b.slot)
          .map(type => <PokemonType {...type} key={type.slot} />)}
      </div>
    )}
    {entry("Weight", formatWeight(weight))}
    {entry(
      "Abilities",
      abilities
        .sort((a, b) => a.slot - b.slot)
        .filter(ab => !ab.is_hidden)
        .map(a => capitalize(a.ability.name))
        .join(", ")
    )}
  </div>
);

PokedexData.propTypes = {
  order: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  abilities: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
};

export default PokedexData;
