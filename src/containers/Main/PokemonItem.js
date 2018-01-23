import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { getPokemanId, pokemonImageUrl, formatName } from '../../helpers/utils';

const PokemonItem = ({ pokemon, onSelect }) => {
  const id = getPokemanId(pokemon.url);

  return (
    <Link to={`/${pokemon.name}/${id}`} onClick={onSelect} className="main__pokemon__item">
      <img src={pokemonImageUrl(id)} alt={pokemon.name} />
    </Link>
  );
}

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string
  })
}

export default PokemonItem;