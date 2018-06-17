import React, { Component } from "react";

class HelloWorldClass extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }
  render() {
    return <div>Hello {this.name} from a class!</div>;
  }
}

export default HelloWorldClass;
