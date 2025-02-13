/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import StyledReset from '../styled/components/Reset';

const ResetAllParams = ({ setSearchValue, setHairFilterValue, setEyeFilterValue }) => {
  const handleReset = (e) => {
    e.preventDefault();
    setSearchValue('');
    setHairFilterValue('');
    setEyeFilterValue('');
  };

  return (
    <StyledReset>
      <button type='button' onClick={handleReset}>Reset All</button>
    </StyledReset>
  );
};

export default ResetAllParams;
