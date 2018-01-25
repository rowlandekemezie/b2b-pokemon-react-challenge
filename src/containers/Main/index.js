import React, { Component } from 'react';
import DetailModal from 'react-modal';
import withRouter from 'react-router-dom/withRouter';
import Pokemons from './Pokemons';
import PokemonDetails from './PokemonDetails';
import customStyles from './styles';

export class Main extends Component {
  state = {
    isDetailModalOpen: false
  }

  handleSelect = () => this.setState(prevState => ({isDetailModalOpen: !prevState.isDetailModalOpen}));

  goBack = () => {
    this.setState({isDetailModalOpen: false}, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { isDetailModalOpen } = this.state;

    return (
      <main className="main">
        <Pokemons
          handleSelect={this.handleSelect}
        />
        <DetailModal
          isOpen={isDetailModalOpen}
          onRequestClose={this.goBack}
          closeTimeoutMS={400}
          style={customStyles}
        >
          <PokemonDetails backToHome={this.goBack} />
        </DetailModal>
      </main>
    );
  }
}

export default withRouter(Main);
