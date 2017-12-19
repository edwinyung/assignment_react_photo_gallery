import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

const SortButton = ({ handleClick, sortDirection }) => {
  return <input type="submit" value={sortDirection} onClick={handleClick} />;
};

export default SortButton;
