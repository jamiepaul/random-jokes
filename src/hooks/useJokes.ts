import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchJokes } from '../utils/fetchJokes';
import { getRandom } from '../utils/getRandom';
import type { Joke, APIResponse } from '../components/Jokes';

export function useJokes() {
  const [randomJoke, setRandomJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  const query = useQuery({
    queryKey: ['jokes'],
    queryFn: fetchJokes,
    select: (data: APIResponse) => data.results,
    staleTime: 60 * 1000 * 120,
  });

  const getRandomJoke = () => {
    setLoading(true);
    if (query.data) {
      setRandomJoke(getRandom(query.data));
    } else {
      setRandomJoke(null);
    }
    setLoading(false);
  };

  return {
    ...query,
    randomJoke,
    loading,
    getRandomJoke,
  };
}
