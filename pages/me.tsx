import React, { useEffect, useState } from 'react';
import Banner from '../components/index/Banner/Banner';
import AudioFeatures from '../components/mepage/audiofeatures/AudioFeatures';
import Charts from '../components/mepage/charts/Charts';
import Favorites from '../components/mepage/favorites/Favorites';
import Genres from '../components/mepage/genres/Genres';
import { useSpotifyStore } from '../lib/store/zustand';
import styles from '../styles/Me.module.css';

const Me = () => {
  const [currentOption, setCurrentOption] = useState(1);

  const [bgSetting, setBgSetting] = useState(styles['bg-step-1']);

  const spotifyState = useSpotifyStore();
  const [spotifyData, setSpotifyData] = useState(spotifyState.spotifyData);

  const SSR = typeof window === 'undefined';

  useEffect(() => {
    setSpotifyData(spotifyState.spotifyData);
  });

  const setOption = (option: number) => {
    setCurrentOption(option);
  };

  const listenScrollEvent = () => {
    let value = 0;
    if (window.innerWidth < 768) {
      setBgSetting(styles['bg-step-3']);
    } else {
      const divisor = window.innerWidth < 768 ? 125 : 400;
      if (Math.round(window.scrollY) > divisor * 17) {
        value =
          Math.floor(
            Math.round(window.scrollY) /
              ((divisor * Math.round(window.scrollY)) % divisor)
          ) +
          1 -
          17;
      } else {
        value = Math.floor(window.scrollY / divisor) + 1;
      }
      setBgSetting(styles[`bg-step-${value}`]);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  });

  return (
    <div>
      {!SSR ? (
        <div
          className={`h-full min-h-screen w-full min-w-screen flex flex-col justify-center items-center ${bgSetting}`}
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
          <Genres
            topGenres={
              currentOption == 1
                ? spotifyState.spotifyData.topRecentGenres
                : spotifyState.spotifyData.topAllTimeGenres
            }
          />
          <AudioFeatures
            audioFeatures={
              currentOption == 1
                ? spotifyState.spotifyData.topRecentTrackFeatures
                : spotifyState.spotifyData.topAllTimeTrackFeatures
            }
          />
          <Charts
            topTracks={
              currentOption == 1
                ? spotifyState.spotifyData.recentTopTenTracks
                : spotifyState.spotifyData.allTimeTopTenTracks
            }
            topArtists={
              currentOption == 1
                ? spotifyState.spotifyData.recentTopTenArtists
                : spotifyState.spotifyData.allTimeTopTenArtists
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default Me;
