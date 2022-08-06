/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { ExtendedArtist, SingleTrack } from '../types/spotifyTypes';
import { analyzeAudioFeatures } from './analyzeAudioFeatures';
import { ArtistResponse } from './getTopArtists';
import { getTopGenres } from './getTopGenres';
import { TrackResponse } from './getTopTracks';

type SpotifyData = {
  topArtists: {
    recentArtists: AxiosResponse<ArtistResponse, any>;
    allTimeArtists: AxiosResponse<ArtistResponse, any>;
  };
  topTracks: {
    recentTracks: AxiosResponse<TrackResponse, any>;
    allTimeTracks: AxiosResponse<TrackResponse, any>;
  };
  accessToken: string;
};

type ArtistTrackResponse = {
  tracks: SingleTrack[];
};

const getTopTrack = (tracks: SingleTrack[]) => {
  const trackInfo = {
    name: tracks[0].name,
    artist: tracks[0].artists[0].name,
    cover: tracks[0].album.images[0].url,
    url: tracks[0].external_urls.spotify
  };
  return trackInfo;
};

const getTopArtist = async (artist: ExtendedArtist[], accessToken: string) => {
  // get the artist's top track for display purposes
  const topTracks = await axios.get<ArtistTrackResponse>(
    'https://api.spotify.com/v1/artists/' +
      artist[0].id +
      '/top-tracks?country=US',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  const artistInfo = {
    name: artist[0].name,
    image: artist[0].images[0].url,
    url: artist[0].external_urls.spotify,
    topTrackName: topTracks.data.tracks[0].name,
    topTrackUrl: topTracks.data.tracks[0].external_urls.spotify
  };

  return artistInfo;
};

export type FormatReturnType = {
  topRecentTrack: ReturnType<typeof getTopTrack> | null;
  topAllTimeTrack: ReturnType<typeof getTopTrack> | null;
  topRecentArtist: Awaited<ReturnType<typeof getTopArtist>> | null;
  topAllTimeArtist: Awaited<ReturnType<typeof getTopArtist>> | null;
  topRecentGenres: ReturnType<typeof getTopGenres> | null;
  topAllTimeGenres: ReturnType<typeof getTopGenres> | null;
  topRecentTrackFeatures: Awaited<
    ReturnType<typeof analyzeAudioFeatures>
  > | null;
  topAllTimeTrackFeatures: Awaited<
    ReturnType<typeof analyzeAudioFeatures>
  > | null;
  recentTopTenTracks: SingleTrack[] | null;
  allTimeTopTenTracks: SingleTrack[] | null;
  recentTopTenArtists: ExtendedArtist[] | null;
  allTimeTopTenArtists: ExtendedArtist[] | null;
};

export const formatData = async (data: SpotifyData) => {
  const { topArtists, topTracks } = data;
  // get top track from toptracks using gettoptrack
  const topRecentTrack = getTopTrack(topTracks.recentTracks.data.items);
  const topAllTimeTrack = getTopTrack(topTracks.allTimeTracks.data.items);
  const topRecentArtist = await getTopArtist(
    topArtists.recentArtists.data.items,
    data.accessToken
  );
  const topAllTimeArtist = await getTopArtist(
    topArtists.allTimeArtists.data.items,
    data.accessToken
  );
  const topRecentGenres = getTopGenres(topArtists.recentArtists.data.items);
  const topAllTimeGenres = getTopGenres(topArtists.allTimeArtists.data.items);
  const topRecentTrackFeatures = await analyzeAudioFeatures(
    topTracks.recentTracks.data.items,
    data.accessToken
  );
  const topAllTimeTrackFeatures = await analyzeAudioFeatures(
    topTracks.allTimeTracks.data.items,
    data.accessToken
  );

  return {
    topRecentTrack,
    topAllTimeTrack,
    topRecentArtist,
    topAllTimeArtist,
    topRecentGenres,
    topAllTimeGenres,
    topRecentTrackFeatures,
    topAllTimeTrackFeatures,
    recentTopTenTracks: topTracks.recentTracks.data.items.slice(0, 10),
    allTimeTopTenTracks: topTracks.allTimeTracks.data.items.slice(0, 10),
    recentTopTenArtists: topArtists.recentArtists.data.items.slice(0, 10),
    allTimeTopTenArtists: topArtists.allTimeArtists.data.items.slice(0, 10)
  };
};
