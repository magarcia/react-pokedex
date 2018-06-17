import React from "react";

export default ({ size = 150 }) => (
  <figure
    className="egg-loader"
    style={{
      height: size,
      width: size,
      marginTop: -1 * (size / 2),
      marginLeft: -1 * (size / 2)
    }}
  >
    <svg
      style={{
        height: size,
        width: size
      }}
    >
      <use xlinkHref={`/icons.svg#egg`} />
    </svg>
  </figure>
);
