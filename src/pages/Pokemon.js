import React from "react";
import PokedexData from "../components/PokedexData";
import withFetching from "../components/withFetching";
import { API } from "../Constants";

const Pokemon = props => (
  <div className="columns">
    <div className="column">
      <figure className="image is-128x128">
        <img src={props.sprites.front_default} alt={props.name} />
      </figure>
    </div>
    <div className="column is-three-quarters">
      <div className="content">
        <h1 style={{ textTransform: "capitalize" }}>{props.name}</h1>

        <h2>Pokédex data</h2>
        <PokedexData {...props} />
      </div>
    </div>
  </div>
);

export default withFetching(props => API + props.match.params.id)(Pokemon);
