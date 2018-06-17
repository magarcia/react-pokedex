import React from 'react';
import icons from '../icons.svg';

export default ({size = 150}) => (
  <figure
    className="egg-loader"
    style={{
      height: size,
      marginLeft: -1 * (size / 2),
      marginTop: -1 * (size / 2),
      width: size,
    }}
  >
    <svg
      style={{
        height: size,
        width: size,
      }}
    >
      <use xlinkHref={`${icons}#egg`} />
    </svg>
  </figure>
);
