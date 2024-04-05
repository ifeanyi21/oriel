const TextAnimatedGradient = ({ text, className }) => {
  return (
    <span
      className={`capitalize ${className} tracking-tight dark:text-white text-gray-900 sm:text-4xl inline-flex animate-text-gradient bg-gradient-to-r from-[#0C359E] via-[#4942E4] to-[#3559E0] bg-[200%_auto] bg-clip-text text-transparent`}
    >
      {text}
    </span>
  );
};

export default TextAnimatedGradient;
