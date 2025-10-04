import React from 'react';

// Import your page sections
import About from '../components/About/About.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Education from '../components/Education/Education.jsx';
import Experience from '../components/Experience/Experienc.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Skills from '../components/Skills/Skill.jsx';
import Work from '../components/Work/Work.jsx';
import BlurBlob from '../components/BlurBlob.jsx';

// Import your new custom Particles component
import Particles from '../components/Particles/Particles.jsx';

const Home = () => {
  return (
    <div className="bg-[#050414] relative overflow-hidden">
      {/* Container for the background animation */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={1000}
          particleColors={['#ffffff', '#8245ec']}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={40}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      {/* Main content wrapper with a higher z-index */}
      <div className="relative z-10">
        <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

        {/* Your grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Your page components */}
        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;