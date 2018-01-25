import React, { Component } from 'react';
import ReactPlaceholder from 'react-placeholder';
import isEmpty from 'lodash/isEmpty';
import withRouter from 'react-router-dom/withRouter';
import Sprites from './Sprites';
import { apiRequest } from '../../../api';
import BasicDetails from './BasicDetails';

export class PokemonDetails extends Component {
  state = {
    details: null,
    error: ''
  }

  async fetchDetails() {
    const { location } = this.props;
    const pokemonId = parseInt(location.pathname.split('/').pop(), 10);
    try {
      const response = await apiRequest(`/${pokemonId}`);
      this.setState({details: response});
    } catch (e) {
      this.setState({error: 'Something went wrong'});
    }
  }

  componentWillMount() {
    if (this.state.details == null) {
      this.fetchDetails();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.fetchDetails();
    }
  }

  render() {
    const { details, error } = this.state;

    return (
      <ReactPlaceholder showLoadingAnimation type="media" rows={7} ready={!isEmpty(details)}>
        {error && <p>{error}</p>}
        {!isEmpty(details) && <BasicDetails details={details} backToHome={this.props.backToHome} />}
        {!isEmpty(details) && <Sprites sprites={details.sprites} />}
      </ReactPlaceholder>
    );
  }
};

export default withRouter(PokemonDetails);
