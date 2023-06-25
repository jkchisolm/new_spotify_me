import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import GetStartedButton from './GetStartedButton';
import axios from 'axios';

import querystring from 'querystring';
import { useAuthStore, useSpotifyStore } from '../../../lib/store/zustand';
import { getSpotifyData } from '../../../lib/spotifyHelpers/getSpotifyData';

const HeroSection = () => {
  const router = useRouter();

  const [codeRetrieved, setCodeRetrieved] = React.useState(false);

  const authState = useAuthStore();
  const spotifyState = useSpotifyStore();

  const handleClick = () => {
    setCodeRetrieved(true);
    window.location.href =
      'https://accounts.spotify.com/authorize?' +
      new URLSearchParams({
        response_type: 'code',
        client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
        scope: 'user-top-read user-read-recently-played',
        redirect_uri: 'https://meclone.jkchisolm.com',
        state: 'xyzzyx'
      });
  };

  useEffect(() => {
    const path = router.asPath;
    if (path.startsWith('/?code')) setCodeRetrieved(true);
    if (path.startsWith('/?code') && codeRetrieved) {
      const authCode = path.substring(7, path.length - 13);
      let accessToken: string;
      let refreshToken: string;
      axios
        .post(
          'https://accounts.spotify.com/api/token',
          querystring.stringify({
            code: authCode,
            redirect_uri: 'https://meclone.jkchisolm.com',
            grant_type: 'authorization_code'
          }),
          {
            headers: {
              Authorization:
                'Basic ' +
                btoa(
                  process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID +
                    ':' +
                    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
                ),
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )
        .then(async function (response) {
          if (response.status === 200) {
            accessToken = response.data.access_token;
            refreshToken = response.data.refresh_token;
            authState.setAccessToken(accessToken);
            authState.setRefreshToken(refreshToken);
            const data = await getSpotifyData(accessToken);
            spotifyState.setSpotifyData(data);
            router.push({ pathname: '/me' });
          }
        });
    }
  }, [codeRetrieved, authState, router, spotifyState]);
  return (
    <div
      className="h-full w-7/12 min-h-full flex flex-col flex-grow justify-center items-center text-indigo-900"
      style={{ fontFamily: 'Circular' }}
    >
      <div className="text-2xl font-semibold">Spotify.me</div>
      <div className="text-5xl md:text-7xl font-black pt-2 text-center">
        You are what you stream
      </div>
      <div className="text-sm md:text-md pt-2">
        We&apos;re constantly uncovering new habits in our streaming
        intelligence to teach us more about how people stream—we call it
        Understanding People Through Music. Think you know what kind of listener
        you are? Log-in to Spotify.me to see your own streaming in action.
      </div>
      <GetStartedButton
        handleClick={handleClick}
        text={codeRetrieved ? 'Loading...' : 'GET STARTED'}
      />
    </div>
  );
};

export default HeroSection;
