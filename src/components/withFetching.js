import React, {Component} from 'react';
import {deepEqual} from '../utils';
import api from '../services/api';
import Loader from './Loader';

const withFetching = getUrl => InnerComponent =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);
      this.props = props;

      this.state = {
        data: {},
        error: null,
        isLoading: true,
      };
    }

    componentDidMount() {
      this.fetchData();
    }
    componentDidUpdate(prevProps) {
      if (!deepEqual(this.props, prevProps)) {
        this.fetchData(this.props.userID);
      }
    }

    fetchData() {
      this.setState({isLoading: true});

      api(getUrl(this.props))
        .then(data => this.setState({data, isLoading: false}))
        .catch(error => this.setState({error, isLoading: false}));
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
        return <Loader />;
      }
      return <InnerComponent {...this.props} {...this.state.data} />;
    }
  };

export default withFetching;
