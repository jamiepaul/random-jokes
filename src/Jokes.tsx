import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchJokes } from './utils/fetchJokes';
import { getRandom } from './utils/getRandom';
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
  const [randomJoke, setRandomJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const {
    data: jokes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['jokes'],
    queryFn: fetchJokes,
    select: (data: APIResponse) => data.results,
    staleTime: 60 * 1000 * 120, // 2hrs
  });

  if (isPending) {
    return (
      <div className="font-bold text-xl text-red-700 my-8">
        Loading jokes...
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <div className="font-bold text-red-700 my-8">There was an error.</div>
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
        onClick={() => {
          setLoading(true);
          setRandomJoke(getRandom(jokes));
          setLoading(false);
        }}
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Loading...' : 'Get Random Joke'}
      </button>
    </>
  );
}

export default Jokes;
