import axios from 'axios';
import { SingleTrack } from '../types/spotifyTypes';

export type AudioResponse = {
  audio_features: {
    danceability: number;
    energy: number;
    id: string;
    instrumentalness: number;
    valence: number;
  }[];
};

export const getAudioFeatures = async (
  tracks: SingleTrack[],
  accessToken: string
) => {
  // gets the audio features for the top tracks
  const trackIds = tracks.map((track) => track.id).join(',');
  const audioFeatures = await axios.get<AudioResponse>(
    `https://api.spotify.com/v1/audio-features?ids=${trackIds}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return audioFeatures;
};
