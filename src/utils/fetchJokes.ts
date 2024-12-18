import { APIResponse } from '../Jokes';

const url = 'https://icanhazdadjoke.com/search?limit=30&page=1';
const options = {
  headers: {
    'User-Agent': 'My Library (https://github.com/jamiepaul/random-jokes)',
    Accept: 'application/json',
  },
};

export const fetchJokes = async (): Promise<APIResponse> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};
