import React from "react";

const Logo = ({ size = 50 }) => (
  <figure style={{ height: size, width: size, display: "inline-block" }}>
    <svg style={{ height: size, width: size }}>
      <use xlinkHref={`/icons.svg#pokedex`} />
    </svg>
  </figure>
);

export default Logo;
