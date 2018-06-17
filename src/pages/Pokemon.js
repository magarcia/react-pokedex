import React from "react";
import PokedexData from "../components/PokedexData";
import PokemonImage from "../components/PokemonImage";
import withFetching from "../components/withFetching";
import { API } from "../Constants";
import { padNumer } from "../utils";

const Pokemon = props => (
  <div className="columns">
    <div className="column">
      <PokemonImage id={props.id} name={props.name} size={250} />
    </div>
    <div className="column is-three-quarters">
      <div className="content" style={{ margin: "0 16px" }}>
        <h1
          className="subtitle is-1 is-capitalized"
          style={{
            display: "inline-block",
            marginRight: 16
          }}
        >
          {props.name}
        </h1>

        <h2
          className="subtitle is-2 has-text-weight-light"
          style={{ display: "inline-block" }}
        >
          #{padNumer(props.id)}
        </h2>
        <PokedexData {...props} />
      </div>
    </div>
  </div>
);

export default withFetching(props => API + parseInt(props.match.params.id, 10))(
  Pokemon
);
