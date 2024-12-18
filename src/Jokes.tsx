import { useQuery } from '@tanstack/react-query';
import { fetchJokes } from './utils/fetchJokes';
import JokeSingle from './JokeSingle';
import { useState } from 'react';
import { getRandom } from './utils/getRandom';

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
      <div>
        {!randomJoke && <p>Click the button to display a joke</p>}
        {randomJoke && <JokeSingle content={randomJoke.joke} />}
      </div>
      <button
        className="p-4 font-bold bg-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10 after:bg-black after:rounded-md rounded-md border-black border-2 hover:after:top-2 hover:after:left-2"
        onClick={() => {
          setRandomJoke(getRandom(jokes));
        }}
      >
        Generate Joke
      </button>
      {jokes?.map(({ id, joke }: Joke) => (
        <JokeSingle key={id} content={joke} />
      ))}
    </>
  );
}

export default Jokes;
