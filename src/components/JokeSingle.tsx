type JokeDisplayProps = {
  content: string;
};

function JokeSingle({ content }: JokeDisplayProps) {
  return (
    <blockquote>
      <p className="text-gray-700 text-lg">{content}</p>
    </blockquote>
  );
}

export default JokeSingle;
