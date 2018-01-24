import React, { Component } from 'react';
import Nprogress from 'nprogress';
import ReactPlaceholder from 'react-placeholder';
import DetailModal from 'react-modal';
import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import { apiRequest } from '../../api';
import { PAGE_SIZE } from '../../constants';
import PokemonList from './PokemonList';
import PokemanDetail from './PokemonDetail';
import SearchInput from '../../components/SearchInput';
import withRouter from 'react-router-dom/withRouter';

export class Main extends Component {
  state = {
    pokemons: [],
    error: '',
    search: '',
    isDetailModalOpen: false
  }

  handleSearch = ({target: {value}}) => {
    this.setState({search: value});
  }

  getDisplayedData() {
    const { search, pokemons } = this.state;
    const searchQuery = new RegExp(search, 'gi');

    return search.length
      ? pokemons.filter(pokemon => pokemon.name.search(searchQuery) >= 0)
      : pokemons;
  }

  handleSelect = () => this.setState(({isDetailModalOpen}) => ({isDetailModalOpen: !isDetailModalOpen}));

  async componentWillMount() {
    DetailModal.setAppElement('body');

    if (this.state.pokemons.length === 0) {
      Nprogress.start();
      try {
        const { results } = await apiRequest('/?limit=50');
        this.setState({pokemons: results});
      } catch (e) {
        this.setState({error: 'Something went wrong'});
      }
      Nprogress.done();
    }
  }

  goBack = () => {
    this.setState({isDetailModalOpen: false}, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { pokemons, search, isDetailModalOpen } = this.state;
    const displayPokemons = this.getDisplayedData().slice(0, PAGE_SIZE);
    return (
      <main className="main">
        <ReactPlaceholder showLoadingAnimation type="media" rows={7} ready={pokemons.length > 0}>
          <SearchInput onChange={this.handleSearch} value={search} />
          {displayPokemons && displayPokemons.length
            ? <PokemonList pokemons={displayPokemons} onSelect={this.handleSelect} />
            : <div className="main__not-found">No Pokemon found</div>
          }
        </ReactPlaceholder>
        <div className="main__pagination">
          <div className="pagination__prev">prev</div>
          <div className="pagination__currEnt">1</div>
          <span className="pagination__text">of 5</span>
          <div className="pagination__next">next</div>
        </div>
        <DetailModal
          isOpen={isDetailModalOpen}
          onRequestClose={this.goBack}
          closeTimeoutMS={400}
        >
          <PokemanDetail backToHome={this.goBack} />
        </DetailModal>
      </main>
    );
  }
}

export default withRouter(Main);
