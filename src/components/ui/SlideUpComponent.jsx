import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

const SlideUpComponent = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  return (
    <section ref={ref} className="h-auto flex justify-center items-center">
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : { y: "100%" }}
        transition={{
          type: "spring",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SlideUpComponent;
