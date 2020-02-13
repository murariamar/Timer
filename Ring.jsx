import React from 'react';
import PropTypes from 'prop-types';

const Ring = ({ remainingPathColor, strokeDasharray }) => (
  <svg className="base-timer__svg" viewBox="0 0 100 100">
    <g className="base-timer__circle">
      <path
        className="base-timer__path-elapsed"
        d="M1024 512c0 282.77-229.23 512-512 512s-512-229.23-512-512c0-282.77 229.23-512 512-512s512 229.23 512 512z"
      />
      <path
        stroke-dasharray={strokeDasharray}
        className={`base-timer__path-remaining ${remainingPathColor}`}
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      />
    </g>
  </svg>
);

Ring.propTypes = {
  remainingPathColor: PropTypes.string.isRequired,
  strokeDasharray: PropTypes.number.isRequired
};

export default Ring;
