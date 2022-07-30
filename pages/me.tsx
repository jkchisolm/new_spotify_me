import React, { useEffect, useState } from 'react';
import Banner from '../components/index/Banner/Banner';
import Favorites from '../components/mepage/favorites/Favorites';
import Genres from '../components/mepage/genres/Genres';
import { useSpotifyStore } from '../lib/store/zustand';
import styles from '../styles/Me.module.css';

const Me = () => {
  const [currentOption, setCurrentOption] = useState(1);

  const [bgSetting, setBgSetting] = useState(styles['bg-step-1']);

  const spotifyState = useSpotifyStore();

  const setOption = (option: number) => {
    setCurrentOption(option);
  };

  const listenScrollEvent = (event: any) => {
    setBgSetting(styles[`bg-step-${Math.floor(window.scrollY / 125) + 1}`]);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  });

  return (
    <div
      className={`h-full min-h-screen w-full flex flex-col justify-center items-center ${bgSetting}`}
    >
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
      <Genres topGenres={spotifyState.spotifyData.topAllTimeGenres} />
    </div>
  );
};

export default Me;
