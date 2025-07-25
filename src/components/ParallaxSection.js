// src/components/ParallaxSection.js
import React from 'react';
import { Parallax } from 'react-parallax';
import bgImage from '../assets/parallax-bg.jpg'; // Use any image you'd like

const ParallaxSection = () => {
  return (
    <Parallax bgImage={bgImage} strength={400}>
      <div style={{ height: '300px' }} className="flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold shadow-lg bg-black/50 px-6 py-2 rounded-lg">
          Welcome to My Creative World
        </h2>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
