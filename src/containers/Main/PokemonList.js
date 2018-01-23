import React from 'react';
import PropTypes from 'prop-types';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons, onSelect }) => {
  const renderPokemons = () => {
    return pokemons.map(pokemon => (
      <PokemonItem key={pokemon.name}
        pokemon={pokemon}
        onSelect={onSelect}
      />
    ));
  };

  return (
    <div className="main__pokemon__wrapper">
      {renderPokemons()}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string.isRequired
  }))
};

export default PokemonList;
