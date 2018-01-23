import React, { Component } from 'react';

class PokemonDetails extends Component {

  render() {
    return (
      <div>
        {this.props.match}
        <p onClick={this.props.backToHome}> Back </p>
        Details
      </div>
    );
  }
};

export default PokemonDetails;
