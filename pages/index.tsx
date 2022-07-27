import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import Banner from '../components/index/Banner/Banner';
import HeroSection from '../components/index/HeroSection/HeroSection';

const index = () => {
  return (
    <div className="h-full min-h-screen w-full min-w-screen bg-gradient-to-br from-amber-400 to-pink-400 flex flex-col justify-center items-center">
      <Banner />
      <HeroSection />
    </div>
  );
};

export default index;
