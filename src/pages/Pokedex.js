import React from "react";
import { API } from "../Constants";
import withFetching from "../components/withFetching";
import PokedexEntry from "../components/PokedexEntry";

const Pokedex = ({ results }) => {
  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <tbody>
        {results.map((entry, index) => (
          <PokedexEntry name={entry.name} id={index + 1} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default withFetching(() => API + "?limit=151")(Pokedex);
