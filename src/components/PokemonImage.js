import React from "react";
import { padNumer } from "../utils";

const fixNames = name => {
  if (name === "sceptile") {
    return "sceptille";
  }
  if (name === "jirachi") {
    return "lirachi";
  }
  if (name === "ninjask") {
    return "niniask";
  }
  if (name === "baltoy") {
    return "baltov";
  }
  if (name === "claydol") {
    return "clavdol";
  }
  if (name.includes("deoxys")) {
    return "deoxys";
  }
  return name;
};

const PokemonImage = ({ id, name, size = 100 }) => (
  <figure style={{ padding: 50 }} className="image is-4by3">
    <svg style={{ height: size, width: size }}>
      <use
        xlinkHref={`/pokemon-symbols.svg#${padNumer(id, 3)}-${fixNames(name)}`}
      />
    </svg>
  </figure>
);

export default PokemonImage;
