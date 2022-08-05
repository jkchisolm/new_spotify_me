import { SingleTrack } from '../types/spotifyTypes';
import { getAudioFeatures } from './getAudioFeatures';

export const analyzeAudioFeatures = async (
  tracks: SingleTrack[],
  accessToken: string
) => {
  const audioFeatures = await getAudioFeatures(tracks, accessToken);
  // analyze danceability, energy, instrumentalness, valence
  const danceability = audioFeatures.data.audio_features.map(
    (track) => track.danceability
  );
  const energy = audioFeatures.data.audio_features.map((track) => track.energy);
  const instrumentalness = audioFeatures.data.audio_features.map(
    (track) => track.instrumentalness
  );
  const valence = audioFeatures.data.audio_features.map(
    (track) => track.valence
  );
  console.log(valence);

  // determine how many tracks are above 0.5 for each category
  const danceabilityCount = danceability.filter((track) => track > 0.6).length;
  const energyCount = energy.filter((track) => track > 0.5).length;
  const instrumentalnessCount = instrumentalness.filter(
    (track) => track > 0.05
  ).length;
  const valenceCount = valence.filter((track) => track > 0.25).length;
  console.log(valenceCount);

  // get top 3 tracks for each category
  const topDanceability = audioFeatures.data.audio_features
    .sort((a, b) => b.danceability - a.danceability)
    .slice(0, 3);
  const topEnergy = audioFeatures.data.audio_features
    .sort((a, b) => b.energy - a.energy)
    .slice(0, 3);
  const topInstrumentalness = audioFeatures.data.audio_features
    .sort((a, b) => b.instrumentalness - a.instrumentalness)
    .slice(0, 3);
  const topValence = audioFeatures.data.audio_features
    .sort((a, b) => b.valence - a.valence)
    .slice(0, 3);

  // get the track objects for the top 3 tracks
  const topDanceabilityTracks = topDanceability.map((track) =>
    tracks.find((t) => t.id === track.id)
  );
  const topEnergyTracks = topEnergy.map((track) =>
    tracks.find((t) => t.id === track.id)
  );
  const topInstrumentalnessTracks = topInstrumentalness.map((track) =>
    tracks.find((t) => t.id === track.id)
  );
  const topValenceTracks = topValence.map((track) =>
    tracks.find((t) => t.id === track.id)
  );

  return {
    danceability: { danceabilityCount, topDanceabilityTracks },
    energy: { energyCount, topEnergyTracks },
    instrumentalness: { instrumentalnessCount, topInstrumentalnessTracks },
    valence: { valenceCount, topValenceTracks }
  };
};
