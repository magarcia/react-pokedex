import React, { Component } from "react";
import PokedexData from "./PokedexData";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      order: 1,
      name: "bulbasaur",
      weight: 69,
      height: 7,
      types: [
        {
          slot: 2,
          type: {
            name: "poison"
          }
        },
        {
          slot: 1,
          type: {
            name: "grass"
          }
        }
      ],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      }
    };
  }

  render() {
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
}

export default Pokemon;
