/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import StyledSearch from '../styled/components/Search';

const Search = ({ setSearchValue, children }) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(currentValue);
    setCurrentValue('');
  };

  return (
    <StyledSearch>
      <input type='text' value={currentValue} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      {children}
    </StyledSearch>
  );
};

export default Search;