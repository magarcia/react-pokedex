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
            <table className="table is-hoverable">
              <tr>
                <td>National №</td>
                <td>{this.state.order}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{JSON.stringify(this.state.types)}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{this.state.height}</td> {/*2′4″ (0.71m)*/}
              </tr>
              <tr>
                <td>Weight</td>
                <td>{this.state.weight}</td>
                {/*15.2 lbs (6.9 kg)*/}
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
