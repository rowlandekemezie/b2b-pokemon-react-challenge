import React, { Component } from 'react';
import { apiRequest } from '../../../api';

class PokemonDetails extends Component {
  state = {
    details: null
  }

  async componentWillMount() {
    if (this.state.details == null) {
      const { match } = this.props;
    //   try {
    //     const result = await apiRequest('/')
    //   }
    }
  }
  render() {
    return (
      <div>
        <p onClick={this.props.backToHome}> Back </p>
        Details
      </div>
    );
  }
};

export default PokemonDetails;
