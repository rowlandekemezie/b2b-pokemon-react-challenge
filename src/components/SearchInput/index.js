import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="search"
      placeholder="Search for Pokémon here"
      value={value}
      onChange={onChange}
      className="input__search"
    />
  );
};

export default SearchInput;
