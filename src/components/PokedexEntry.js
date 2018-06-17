import React from "react";
import { Link } from "react-router-dom";
import { padNumer } from "../utils";
import PokemonImage from "./PokemonImage";

const PokedexEntry = ({ name, id }) => (
  <div className="column is-3">
    <div className="pokemoncard" style={{ textAlign: "center" }}>
      <Link to={`/pokemon/${padNumer(id, 3)}`}>
        <div className="pokemoncard-image has-background-light">
          {/* <i className="material-icons fav">favorite_border</i> */}
          <PokemonImage id={id} name={name} />
        </div>
        <div className="pokemoncard-content">
          <h1 className="title is-4 is-capitalized">{name}</h1>
          <p className="subtitle is-6">#{padNumer(id, 3)}</p>
        </div>
      </Link>
    </div>
  </div>
);

export default PokedexEntry;
