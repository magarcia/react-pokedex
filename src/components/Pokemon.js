import React, { Component } from "react";

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
    return null;
  }
}

export default Pokemon;
