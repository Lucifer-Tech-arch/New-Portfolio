import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100] bg-gradient-to-r from-[#8245ec] via-[#a855f7] to-[#ec4899] shadow-[0_0_12px_rgba(130,69,236,0.8)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
