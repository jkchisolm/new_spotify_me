import React, { useState } from 'react';
import { FormatReturnType } from '../../../lib/spotifyHelpers/formatData';
import FeatureHeader from './FeatureHeader';
import FeatureSelector from './FeatureSelector';
import TrackCards from './TrackCards';

type Props = {
  audioFeatures: FormatReturnType['topRecentTrackFeatures'];
};

const AudioFeatures = (props: Props) => {
  const [currentOption, setCurrentOption] = useState(1);
  const slogans = [
    'Are you the life of the party?',
    'Pump up the jam.',
    'No words needed.',
    "You've gotta feeling."
  ];
  const percentages = [
    Math.round((props.audioFeatures.danceability.danceabilityCount / 50) * 100),
    Math.round((props.audioFeatures.energy.energyCount / 50) * 100),
    Math.round(
      (props.audioFeatures.instrumentalness.instrumentalnessCount / 50) * 100
    ),
    Math.round((props.audioFeatures.valence.valenceCount / 50) * 100)
  ];
  const tracks = [
    props.audioFeatures.danceability.topDanceabilityTracks,
    props.audioFeatures.energy.topEnergyTracks,
    props.audioFeatures.instrumentalness.topInstrumentalnessTracks,
    props.audioFeatures.valence.topValenceTracks
  ];
  const feature = ['danceable', 'energetic', 'instrumental', 'happy'];

  const onClick = (option: number) => {
    setCurrentOption(option);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <FeatureSelector
        currentOption={currentOption}
        setCurrentOption={onClick}
      />
      <FeatureHeader
        slogan={slogans[currentOption - 1]}
        percentage={percentages[currentOption - 1]}
        feature={feature[currentOption - 1]}
      />
      <TrackCards topTracks={tracks[currentOption - 1]} />
    </div>
  );
};

export default AudioFeatures;
