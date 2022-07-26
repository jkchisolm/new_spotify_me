import React from 'react';
import SpotifyLogo from '../../general/SpotifyLogo';

const HeroSection = (props: Props) => {
  return (
    <div className="text-white h-full">
      <SpotifyLogo />{' '}
      <div>
        <span className="font-semibold">Spotify</span> for Brands
      </div>{' '}
    </div>
  );
};

export default HeroSection;
