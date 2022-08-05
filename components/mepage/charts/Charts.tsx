import React from 'react';
import { ExtendedArtist, SingleTrack } from '../../../lib/types/spotifyTypes';
import ChartSection from './ChartSection';

type Props = {
  topTracks: SingleTrack[];
  topArtists: ExtendedArtist[];
};

const Charts = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-10/12 mb-32">
      <div className="text-2xl font-bold text-white">
        And now, for a final wrap up...
      </div>
      <div className="text-7xl font-bold text-white py-8">Your top charts</div>
      <div className="flex flex-row justify-center items-stretch w-full mt-7">
        <ChartSection name="Tracks" type="Track" data={props.topTracks} />
        <ChartSection name="Artists" type="Artist" data={props.topArtists} />
      </div>
    </div>
  );
};

export default Charts;
