import React, { Component } from "react";

const withFetching = getUrl => InnerComponent =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);
      this.props = props;

      this.state = {
        data: {},
        isLoading: true,
        error: null
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(getUrl(this.props))
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      if (this.state.error) {
        return (
          <div className="notification is-danger">
            {this.state.error.message}
          </div>
        );
      }

      if (this.state.isLoading) {
        return <div className="loader" />;
      }
      return <InnerComponent {...this.props} {...this.state.data} />;
    }
  };

export default withFetching;
