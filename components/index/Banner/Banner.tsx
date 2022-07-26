import React from 'react';
import SpotifyLogo from '../../general/SpotifyLogo';

const Banner = () => {
  return (
    <div className="text-white h-full flex flex-row justify-center items-center py-2">
      <div>
        <SpotifyLogo />{' '}
      </div>
      <div className="mx-2 text-2xl opacity-60">
        <span className="font-semibold">Spotify</span> for Brands
      </div>{' '}
    </div>
  );
};

export default Banner;
