import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Jokes from './Jokes';

function App() {
  return (
    <>
      <header>
        <h1>Random Jokes</h1>
        <p className="font-bold text-blue-900 my-8">We've got jokes!</p>
      </header>
      <main>
        <Jokes />
      </main>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
