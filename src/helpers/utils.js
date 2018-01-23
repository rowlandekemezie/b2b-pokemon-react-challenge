export const pokemonImageUrl = id => `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const getPokemanId = url => {
  const splittedUrl = url.split('/');
  const id = parseInt(splittedUrl[splittedUrl.length - 2], 10);
  
  return id;
};