import { useQuery } from '@tanstack/react-query';
import { fetchJokes } from './utils/fetchJokes';
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
      {jokes?.map(({ id, joke }: Joke) => (
        <JokeSingle key={id} content={joke} />
      ))}
    </>
  );
}

export default Jokes;
