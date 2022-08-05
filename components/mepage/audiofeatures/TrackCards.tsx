import React from 'react';
import { SingleTrack } from '../../../lib/types/spotifyTypes';
import TrackCard from './trackcards/TrackCard';

type Props = {
  topTracks: SingleTrack[];
};

const TrackCards = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start">
      {props.topTracks.map((track) => {
        return <TrackCard track={track} key={track.id} />;
      })}
    </div>
  );
};

export default TrackCards;
