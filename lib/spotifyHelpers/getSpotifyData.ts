import { getTopArtists } from './getTopArtists';
import { getTopTracks } from './getTopTracks';

export const getSpotifyData = async (accessToken: string) => {
  const topTracks = await getTopTracks(accessToken);
  const topArtists = await getTopArtists(accessToken);
  return topArtists;
};
