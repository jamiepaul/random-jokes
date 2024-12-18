import { Joke } from '../components/Jokes';

export const getRandom = (array: Joke[]): Joke => {
  const randomIndex = Math.floor(Math.random() * array.length + 1);
  return array[randomIndex];
};
