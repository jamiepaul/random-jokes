type JokeDisplayProps = {
  content: string;
};

function JokeSingle({ content }: JokeDisplayProps) {
  return (
    <article className="joke w-96 mx-auto">
      <blockquote className="p-6 bg-blue-800 text-white">
        <p>{content}</p>
      </blockquote>
    </article>
  );
}

export default JokeSingle;
