import React from 'react';
import HeroSection from '../components/index/HeroSection/HeroSection';

const index = (props: Props) => {
  return (
    <div className="h-full min-h-screen w-full min-w-screen bg-gradient-to-br from-amber-400 to-pink-400">
      <HeroSection />
    </div>
  );
};

export default index;
