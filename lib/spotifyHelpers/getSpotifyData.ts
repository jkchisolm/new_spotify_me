import { formatData } from './formatData';
import { getTopArtists } from './getTopArtists';
import { getTopTracks } from './getTopTracks';

export const getSpotifyData = async (accessToken: string) => {
  const topTracks = await getTopTracks(accessToken);
  const topArtists = await getTopArtists(accessToken);
  const formattedData = await formatData({
    topTracks,
    topArtists,
    accessToken
  });
  return formattedData;
};
