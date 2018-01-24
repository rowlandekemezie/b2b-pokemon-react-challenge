import React from 'react';
import PropTypes from 'prop-types';
import { getPokemanId, pokemonImageUrl, formatName } from '../../helpers/utils';

const PokemonItem = ({ pokemon }) => {
  const id = getPokemanId(pokemon.url);
  const backgroundStyle = {
    backgroundImage: `url(${pokemonImageUrl(id)})`
  };
  return (
    <div className="pokemon__item">
      <div className="pokemon__item__background__cover" style={backgroundStyle} />
      <div className="pokemon__item__content">
        <div className="pokeman__item__picture" style={backgroundStyle} />
        <div className="pokemon__item__name">{formatName(pokemon.name)}</div>
      </div>
    </div>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string
  })
};

export default PokemonItem;
