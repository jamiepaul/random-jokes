import { useJokes } from '../hooks/useJokes';
import JokeSingle from './JokeSingle';

export type Joke = {
  id: string;
  joke: string;
};

export type APIResponse = {
  results: Joke[];
  total_jokes: number;
  total_pages: number;
  current_page: number;
};

function Jokes() {
  const { isPending, isError, randomJoke, loading, getRandomJoke } = useJokes();

  if (isError) {
    throw new Error('Error fetching jokes');
  }

  if (isPending) {
    return (
      <div className="font-bold text-xl text-red-700 my-8">
        Loading jokes...
      </div>
    );
  }

  return (
    <>
      <article className="min-h-[120px] bg-gray-50 rounded-lg p-4 mb-6">
        {randomJoke ? (
          <JokeSingle content={randomJoke.joke} />
        ) : (
          <p className="text-gray-400 text-center">
            Your joke will appear here
          </p>
        )}
      </article>

      <button
        onClick={getRandomJoke}
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Loading...' : 'Get Random Joke'}
      </button>
    </>
  );
}

export default Jokes;
