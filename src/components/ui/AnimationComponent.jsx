import { motion, useScroll, useTransform } from "framer-motion";

const AnimationComponent = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity: scrollYProgress,
      }}
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationComponent;
