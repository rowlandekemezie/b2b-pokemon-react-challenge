import React from 'react';
import PropTypes from 'prop-types';
import backArrowIcon from '../../../static/images/back-arrow.svg';
import PokemonItem from '../Pokemons/PokemonItem';
import { formatName } from '../../../helpers/utils';

const BasicDetails = ({ details, backToHome }) => {
  return (
    <div className="pokemon__details">
      <div>
        <img src={backArrowIcon} onClick={backToHome} alt="back arrow" />
        <span className="pokemon__name">{formatName(details.name)}</span>
      </div>
      <div className="pokemon__basic__details">
        <PokemonItem pokemon={details.forms[0]} />
        <div className="pokemon__details__items">
          <div className="basic__item">
            <span>Name:</span>
            <span>{details.name}</span>
          </div>
          <div className="basic__item">
            <span>Weight:</span>
            <span>{details.weight}</span>
          </div>
          <div className="basic__item">
            <span>{`Type${details.types.length > 1 ? 's' : ''}`}:</span>
            <span>{details.types.map(({type}) => type.name).join(', ')}</span>
          </div>
          <div className="basic__item">
            <span>{`Abilit${details.abilities.length > 1 ? 'ies' : 'y'}`}:</span>
            <span>{details.abilities.map(({ability}) => ability.name).join(', ')}</span>
          </div>
          <div className="basic__item">
            <span>Evolution Info:</span>
            <span>{details.base_experience}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

BasicDetails.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    types: PropTypes.array,
    abilities: PropTypes.array,
    base_experience: PropTypes.number
  }),
  backToHome: PropTypes.func.isRequired
};

export default BasicDetails;
