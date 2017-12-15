import React from 'react';

const Heading = ({ level, children }) => {
  return React.createElement(`h${level}`, this.props, children);
};

export default Heading;