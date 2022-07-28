import axios from 'axios';
import { SingleTrack } from '../types/spotifyTypes';

export type TrackResponse = {
  items: SingleTrack[];
};

export const getTopTracks = async (accessToken: string) => {
  // uses the spotify API to get the top recent and all time tracks from the user
  const recentTracks = await axios.get<TrackResponse>(
    'https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term',
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  const allTimeTracks = await axios.get<TrackResponse>(
    'https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term',
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return { recentTracks, allTimeTracks };
};
