/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const ResetAllParams = ({ setSearchValue, setHairFilterValue, setEyeFilterValue }) => {
  const handleReset = (e) => {
    e.preventDefault();
    setSearchValue('');
    setHairFilterValue('');
    setEyeFilterValue('');
  };

  return (
    <button type='button' onClick={handleReset}>Reset All</button>
  );
};

export default ResetAllParams;
