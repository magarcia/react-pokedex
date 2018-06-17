import React from 'react';

export default ({label, value}) => (
  <div className="column is-half">
    <h1
      className="subtitle is-5 has-text-weight-light"
      style={{marginBottom: '0.5rem'}}
    >
      {label}
    </h1>
    <h2
      className="subtitle is-5 has-text-weight-normal"
      style={{marginTop: '0.5rem'}}
    >
      {value}
    </h2>
  </div>
);
