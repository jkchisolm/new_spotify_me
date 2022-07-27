import axios from 'axios';
import { ExtendedArtist } from '../types/spotifyTypes';

type ArtistResponse = {
  items: ExtendedArtist[];
};

export const getTopArtists = async (accessToken: string) => {
  // uses the spotify API to get the top recent and all time tracks from the user
  const recentArtists = await axios.get<ArtistResponse>(
    'https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term',
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  const allTimeArtists = await axios.get<ArtistResponse>(
    'https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term',
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return { recentArtists, allTimeArtists };
};
