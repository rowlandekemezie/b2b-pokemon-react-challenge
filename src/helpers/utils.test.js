import { pokemonImageUrl, formatName, getPokemonId } from './utils';

test('pokemonImageUrl returns proper url', () => {
  const id = 1;
  const expectedValue = 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  expect(pokemonImageUrl(id)).toBe(expectedValue);
});

test('getPokmonId returns pokeman id', () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/2/';

  expect(getPokemonId(url)).toBe(2);
});

test('formatName capitalize first letter and replace dash', () => {
  expect(formatName('binasaur')).toBe('Binasaur');
  expect(formatName('binasaur-awe')).toBe('Binasaur awe');
  expect(formatName('yarka wuper')).toBe('Yarka wuper');
});
