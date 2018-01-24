import fetch from 'isomorphic-fetch';

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const text = await response.text();
    const error = new Error(text || response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

export const apiRequest = (url, method = 'GET') => {
  const baseUrl = process.env.REACT_APP_POKEAPI_URL;

  const request = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}${url}`, request)
    .then(checkStatus)
    .then(parseJSON);
};
