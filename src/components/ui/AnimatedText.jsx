const TextAnimatedGradient = ({ text, className }) => {
  return (
    <span
      className={`capitalize ${className} tracking-tight dark:text-white text-gray-900 inline-flex animate-text-gradient bg-gradient-to-r from-[#FB6D48] via-[#FDA403] to-[#FFAF45] bg-[200%_auto] bg-clip-text text-transparent`}
    >
      {text}
    </span>
  );
};

export default TextAnimatedGradient;
