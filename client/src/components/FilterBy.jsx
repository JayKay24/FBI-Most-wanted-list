/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const FilterBy = ({ setHairFilterValue, setEyeFilterValue, hairFilterValue, eyeFilterValue }) => {
  const handleHairFilterChange = (e) => {
    e.preventDefault();
    setHairFilterValue(e.target.value);
  };

  const handleEyeFilterChange = (e) => {
    e.preventDefault();
    setEyeFilterValue(e.target.value);
  };

  return (
    <div className='params drop-down'>
      <div className='select-filter'>
        <label htmlFor='hair-color'>Hair Color: </label>
        <select id='hair-color' onChange={handleHairFilterChange} value={hairFilterValue}>
          <option value='' selected>--Default--</option>
          <option value='brown'>Brown</option>
          <option value='black'>Black</option>
          <option value='blonde'>Blonde</option>
        </select>
      </div>
      <div className='select-filter'>
        <label htmlFor='eye-color'>Eye Color: </label>
        <select id='eye-color' onChange={handleEyeFilterChange} value={eyeFilterValue}>
          <option value='' selected>--Default--</option>
          <option value='green'>Green</option>
          <option value='brown'>Brown</option>
          <option value='blue'>Blue</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBy;
