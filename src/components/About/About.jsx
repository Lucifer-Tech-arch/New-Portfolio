import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Profile from "../../assets/profile.jpeg";
import Reveal from "../motion/Reveal";

const HeroScene = lazy(() => import("../HeroScene/HeroScene"));

const useTypingEffect = (
  words,
  { loop = true, typeSpeed = 100, deleteSpeed = 50, delay = 2000 }
) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setIsDeleting(true);
        setTypingSpeed(delay);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(typeSpeed);
      } else {
        setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delay,
    loop,
    typingSpeed,
  ]);

  return text;
};

const About = () => {
  const jobTitles = [
    "Fullstack Developer",
    "Backend Developer",
    "Agentic AI Engineer",
    "Software Engineer",
  ];
  const typedText = useTypingEffect(jobTitles, {});

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-8 font-sans text-white min-h-[90vh] flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-6xl mx-auto gap-12 w-full">
        <Reveal direction="left" className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I am
          </motion.h1>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#8245ec] to-pink-500"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Krishna Goswami
          </motion.h2>
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-300 leading-tight h-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I am a <span className="text-[#a855f7]">{typedText}</span>
            <span className="text-gray-300 animate-pulse">|</span>
          </motion.h3>
          <motion.p
            className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            AI Full Stack Developer specializing in scalable SaaS platforms, ERP
            & CRM systems, AI-powered applications, automation workflows, and
            modern web experiences using MERN, Next.js, React Native, Node.js,
            and Agentic AI solutions. Passionate about building high-performance,
            user-centric digital products with clean UI/UX and real-world impact.
          </motion.p>
          <motion.a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 10px #8245ec, 0 0 20px #a855f7",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 20px #8245ec, 0 0 40px #a855f7",
            }}
            whileTap={{ scale: 0.98 }}
          >
            DOWNLOAD CV
          </motion.a>
        </Reveal>

        <Reveal direction="right" delay={0.2} className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
            <motion.div
              className="relative z-10 w-full h-full p-2 border-4 border-purple-700/50 rounded-full glass-card"
              whileHover={{
                scale: 1.04,
                borderColor: "rgba(168, 85, 247, 0.8)",
                boxShadow: "0 0 40px rgba(130, 69, 236, 0.45)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <img
                src={Profile}
                alt="Krishna Goswami"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/512x512/1a1a2e/ffffff?text=Image+Error";
                }}
              />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
