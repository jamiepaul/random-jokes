import { useState } from 'react';

type Joke = {
  id: string;
  joke: string;
};

function App() {
  const [jokes, setJokes] = useState<Joke[]>([]);

  console.log(jokes);

  return (
    <>
      <header>
        <h1>Random Jokes</h1>
      </header>
      <div className="card"></div>
    </>
  );
}

export default App;
