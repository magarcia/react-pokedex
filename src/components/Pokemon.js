import React, { Component } from "react";
import PokedexData from "./PokedexData";

const API = "https://pokeapi.co/api/v2/pokemon/";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {};
  }

  componentDidMount() {
    fetch(API + this.id)
      .then(response => response.json())
      .then(data => this.setState(data));
  }

  renderPokemon() {
    return (
      <div className="columns">
        <div className="column">
          <figure className="image is-128x128">
            <img src={this.state.sprites.front_default} alt={this.state.name} />
          </figure>
        </div>
        <div className="column is-three-quarters">
          <div className="content">
            <h1 style={{ textTransform: "capitalize" }}>{this.state.name}</h1>

            <h2>Pokédex data</h2>
            <PokedexData {...this.state} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.id !== undefined) {
      return this.renderPokemon();
    } else {
      return <div className="loader" />;
    }
  }
}

export default Pokemon;
