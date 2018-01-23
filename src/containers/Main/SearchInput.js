import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for Pokémon here"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
