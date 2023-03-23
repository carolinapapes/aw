import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};
export default Card;
