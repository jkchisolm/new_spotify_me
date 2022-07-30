import { ExtendedArtist } from '../types/spotifyTypes';

export const getTopGenres = (topArtists: ExtendedArtist[]) => {
  const genres = topArtists.map((artist) => artist.genres);
  const flattenedGenres = genres.flat();
  const genreCount = flattenedGenres.reduce((acc, genre) => {
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
  const sortedGenres = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);
  const topGenres = sortedGenres.slice(0, 6);
  return topGenres;
};
