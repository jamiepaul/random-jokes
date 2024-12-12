// import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchJokes } from './fetchJokes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import JokeDisplay from './Joke';

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

function App() {
  const {
    data: jokes,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['jokes'],
    queryFn: fetchJokes,
    select: (data: APIResponse) => data.results,
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
      <header>
        <h1>Random Jokes</h1>
        <p className="font-bold text-blue-900 my-8">We've got jokes!</p>
      </header>
      <main>
        {jokes?.map(({ id, joke }: Joke) => (
          <JokeDisplay key={id} content={joke} />
        ))}
      </main>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
