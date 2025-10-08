import React, { useState, useEffect } from 'react';
import Profile from '../../assets/Profile2.jpg'

// Custom hook to handle the typing effect, removing the need for an external library.
const useTypingEffect = (words, { loop = true, typeSpeed = 100, deleteSpeed = 50, delay = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      // Determine if we are deleting or typing
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      // Logic to switch between typing and deleting
      if (!isDeleting && updatedText === currentWord) {
        // Pause at the end of the word
        setIsDeleting(true);
        setTypingSpeed(delay);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(typeSpeed);
      } else {
        setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay, loop]);

  return text;
};

const About = () => {
  const jobTitles = ['Fullstack Developer', 'Backend Developer', 'Java Developer', 'AI enthusiast'];
  const typedText = useTypingEffect(jobTitles, {});
    
  // Since we can't use local assets in this environment, 
  // I'm using a placeholder. You can replace this with your original image path.
  const profileImageUrl = 'https://placehold.co/512x512/1a1a2e/ffffff?text=TK';

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-8 font-sans text-white"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-6xl mx-auto gap-12">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold  mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Krishna Goswami
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-300 leading-tight h-8">
            I am a <span className="text-[#a855f7]">{typedText}</span>
            <span className="text-gray-300 animate-pulse">|</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            I am a full-stack developer with experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN Stack, Java and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 10px #8245ec, 0 0 20px #a855f7',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side: Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Replaced Tilt with CSS for a clean, dependency-free animation */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 p-2 border-4 border-purple-700/50 rounded-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-purple-500/50 hover:border-purple-600 hover:scale-105">
            <img
              src={Profile}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/512x512/1a1a2e/ffffff?text=Image+Error'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
