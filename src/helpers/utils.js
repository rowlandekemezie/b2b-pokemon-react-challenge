export const pokemonImageUrl = id => `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const getPokemanId = url => {
  const splittedUrl = url.split('/');
  const id = parseInt(splittedUrl[splittedUrl.length - 2], 10);

  return id;
};

export const formatName = name => {
  const replaceSlash = name.replace('-', ' ');
   
  return replaceSlash.charAt(0).toUpperCase() + replaceSlash.substr(1);
};
