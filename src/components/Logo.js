import React from 'react';
import icons from '../icons.svg';

const Logo = ({size = 50}) => (
  <figure style={{display: 'inline-block', height: size, width: size}}>
    <svg style={{height: size, width: size}}>
      <use xlinkHref={`${icons}#pokedex`} />
    </svg>
  </figure>
);

export default Logo;
