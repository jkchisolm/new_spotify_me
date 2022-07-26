import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import GetStartedButton from './GetStartedButton';

const HeroSection = () => {
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    if (path.startsWith('/?code')) {
      const accessToken = path.substring(7, path.length - 13);
      window.localStorage.setItem('accessToken', accessToken);
      router.push('/me');
    }
  });
  return (
    <div
      className="h-full w-7/12 min-h-full flex flex-col flex-grow justify-center items-center text-indigo-900"
      style={{ fontFamily: 'Circular' }}
    >
      <div className="text-2xl font-semibold">Spotify.me</div>
      <div className="text-7xl font-black pt-2">You are what you stream</div>
      <div className="text-md pt-2">
        We&apos;re constantly uncovering new habits in our streaming
        intelligence to teach us more about how people stream—we call it
        Understanding People Through Music. Think you know what kind of listener
        you are? Log-in to Spotify.me to see your own streaming in action.
      </div>
      <GetStartedButton />
    </div>
  );
};

export default HeroSection;
