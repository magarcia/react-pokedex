import React from 'react';

const Logo = ({size = 50}) => (
  <figure style={{display: 'inline-block', height: size, width: size}}>
    <svg style={{height: size, width: size}}>
      <use xlinkHref={'/icons.svg#pokedex'} />
    </svg>
  </figure>
);

export default Logo;
