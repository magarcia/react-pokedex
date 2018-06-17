import React, { Component } from "react";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  setName(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div>Hello {this.state.name}!</div>
        <hr />
        <input
          type="text"
          placeholder="Name"
          onChange={this.setName.bind(this)}
        />
      </div>
    );
  }
}

export default HelloWorld;
