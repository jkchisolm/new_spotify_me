import React, { useState } from 'react';
import Banner from '../components/index/Banner/Banner';
import Favorites from '../components/mepage/favorites/Favorites';
import { useSpotifyStore } from '../lib/store/zustand';

const Me = () => {
  const [currentOption, setCurrentOption] = useState(1);

  const spotifyState = useSpotifyStore();

  const setOption = (option: number) => {
    setCurrentOption(option);
  };

  return (
    <div className="h-full min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-lime-300 to-cyan-400">
      <div className="mb-32">
        <Banner />
      </div>
      <Favorites
        currentOption={currentOption}
        setCurrentOption={setOption}
        track={
          currentOption == 1
            ? spotifyState.spotifyData.topRecentTrack
            : spotifyState.spotifyData.topAllTimeTrack
        }
        artist={
          currentOption == 1
            ? spotifyState.spotifyData.topRecentArtist
            : spotifyState.spotifyData.topAllTimeArtist
        }
      />
    </div>
  );
};

export default Me;
