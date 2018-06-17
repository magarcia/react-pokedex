import React from "react";
import PropTypes from "prop-types";
import PokemonType from "./PokemonType";
import { padNumer } from "../utils";

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

const PokedexData = ({ id, types, height, weight }) => (
  <table className="table is-hoverable">
    <tbody>
      <tr>
        <td>National №</td>
        <td>{padNumer(id)}</td>
      </tr>
      <tr>
        <td>Type</td>
        <td>
          <div className="tags">
            {types
              .sort((a, b) => a.slot - b.slot)
              .map(type => <PokemonType {...type} key={type.slot} />)}
          </div>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>{formatHeight(height)}</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>{formatWeight(weight)}</td>
      </tr>
    </tbody>
  </table>
);

PokedexData.propTypes = {
  order: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
};

export default PokedexData;
