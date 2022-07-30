import React, { useEffect, useState } from 'react';
import Banner from '../components/index/Banner/Banner';
import Favorites from '../components/mepage/favorites/Favorites';
import { useSpotifyStore } from '../lib/store/zustand';
import styles from '../styles/Me.module.css';

const Me = () => {
  const [currentOption, setCurrentOption] = useState(1);

  const [bgSetting, setBgSetting] = useState(styles['bg-step-one']);

  const spotifyState = useSpotifyStore();

  const setOption = (option: number) => {
    setCurrentOption(option);
  };

  const listenScrollEvent = (event: any) => {
    console.log(window.scrollY);
    if (window.scrollY < 150) {
      setBgSetting(styles['bg-step-one']);
    } else if (window.scrollY < 300) {
      setBgSetting(styles['bg-step-two']);
    } else if (window.scrollY < 450) {
      setBgSetting(styles['bg-step-three']);
    }
    // switch (window.scrollY) {
    //   case 0:
    //     setBgSetting(styles['bg-step-one']);
    //     break;
    //   case 150:
    //     setBgSetting(styles['bg-step-two']);
    //     break;
    //   case 300:
    //     setBgSetting(styles['bg-step-three']);
    //     break;
    //   default:
    //     break;
    // }
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
    </div>
  );
};

export default Me;
