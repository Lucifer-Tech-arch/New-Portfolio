import { motion } from "framer-motion";
import Reveal from "./Reveal";

const SectionHeading = ({ title, subtitle }) => (
  <Reveal className="text-center mb-16">
    <motion.h2
      className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
      initial={{ letterSpacing: "0.2em", opacity: 0 }}
      whileInView={{ letterSpacing: "0.05em", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4 rounded-full"
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: 128, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    />
    {subtitle && (
      <motion.p
        className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {subtitle}
      </motion.p>
    )}
  </Reveal>
);

export default SectionHeading;
