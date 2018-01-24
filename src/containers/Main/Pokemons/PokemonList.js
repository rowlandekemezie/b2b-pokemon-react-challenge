import React from 'react';
import PropTypes from 'prop-types';
import PokemonItem from './PokemonItem';
import Link from 'react-router-dom/Link';
import { getPokemonId } from '../../../helpers/utils';

const PokemonList = ({ pokemons, onSelect }) => {
  const renderPokemons = () => {
    return pokemons.map((pokemon, index) => (
      <Link
        to={`/${pokemon.name}/${getPokemonId(pokemon.url)}`}
        key={index}
        className="pokeman__list__item pokemon__no__link"
        onClick={onSelect}
      >
        <PokemonItem pokemon={pokemon} />
      </Link>
    ));
  };

  return (
    <div className="pokemon__list">
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
