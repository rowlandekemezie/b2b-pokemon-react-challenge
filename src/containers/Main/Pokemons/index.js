import React, { Component } from 'react';
import DetailModal from 'react-modal';
import withRouter from 'react-router-dom/withRouter';
import Nprogress from 'nprogress';
import ReactPlaceholder from 'react-placeholder';
import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import { apiRequest } from '../../../api';
import { PAGE_SIZE } from '../../../constants';
import PokemonList from './PokemonList';
import SearchInput from '../../../components/SearchInput';
import Pagination from '../../../components/Pagination';

export class Pokemons extends Component {
  state = {
    pokemons: [],
    error: '',
    search: '',
    currentPage: 1
  }

  async componentWillMount() {
    DetailModal.setAppElement('body');
    this.props.history.replace('/');

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

  handleSearch = ({target: {value}}) => this.setState(({search}) => ({search: value}));

  onSelectPage = (currentPage) => this.setState({currentPage});

  getDisplayedData() {
    const { search, pokemons } = this.state;
    const searchQuery = new RegExp(search, 'gi');

    return search.length
      ? pokemons.filter(pokemon => pokemon.name.search(searchQuery) >= 0)
      : pokemons;
  }

  render() {
    const { pokemons, search, currentPage } = this.state;
    const displayPokemons = this.getDisplayedData();
    const totalPage = Math.ceil(displayPokemons.length / PAGE_SIZE) || 0;
    const pokemonsToRender = displayPokemons.slice(Math.max(0, (currentPage - 1) * PAGE_SIZE), currentPage * PAGE_SIZE);

    return (
      <div className="pokemon">
        <ReactPlaceholder showLoadingAnimation type="media" rows={7} ready={pokemons.length > 0}>
          <SearchInput onChange={this.handleSearch} value={search} />
          {pokemonsToRender && pokemonsToRender.length
            ? <PokemonList pokemons={pokemonsToRender} onSelect={this.props.handleSelect} />
            : <div className="main__not-found">No Pokemon found :)</div>
          }
        </ReactPlaceholder>
        <Pagination
          current={currentPage}
          total={totalPage}
          onNext={() => this.onSelectPage(Math.min(currentPage + 1, totalPage))}
          onPrev={() => this.onSelectPage(Math.max(1, currentPage - 1))}
        />
      </div>
    );
  }
}

export default withRouter(Pokemons);
