const DynamicWords = ({ words }) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const currentWord = words[randomIndex];

  return (
    <p className="text-gray-500 font-bold">{currentWord}</p>
  );
};

export default DynamicWords;