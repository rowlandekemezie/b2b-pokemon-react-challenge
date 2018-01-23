import React, { Component } from 'react'
import Nprogress from 'nprogress';
import ReactPlaceholder from 'react-placeholder';
import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import { apiRequest } from '../../api';
import { PAGE_SIZE } from '../../constants';
import PokemonList from './PokemonList';
import SearchInput from './SearchInput';

export class Main extends Component {
  state = {
    pokemons: [],
    error: '',
    search: ''
  }

  handleSearch = ({ target: {value}}) => {
    this.setState({search: value})
  }

  filterPokemon(pokemons) {
    // todo
  }

  async componentWillMount() {

    if (this.state.pokemons.length === 0) {
      Nprogress.start();
      try {
        const { results } = await apiRequest('/?limit=50');
        this.setState({pokemons: results});
      } catch (e) {
        this.setState({error: 'Something went wrong'})
      }
      Nprogress.done();
    }
  }

  render() {
    const { pokemons, search } = this.state;
    const displayPokemons = pokemons.slice(0, PAGE_SIZE)
    return (
      <main className="main">
        <SearchInput onChange={this.handleSearch} value={search}/>
        <ReactPlaceholder showLoadingAnimation type="media" rows={7} ready={pokemons.length > 0}>
          {displayPokemons && displayPokemons.length? <PokemonList pokemons={displayPokemons} />: <div>No Pokemon found</div>}
        </ReactPlaceholder>
      </main>
    )
  }
}

export default Main;
