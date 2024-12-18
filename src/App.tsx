import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Jokes from './components/Jokes';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <section className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Random Joke Generator
        </h1>
        <Jokes />
      </section>
      <ReactQueryDevtools initialIsOpen={false} />
    </main>
  );
}

export default App;
