import React from 'react';
import { FormatReturnType } from '../../../lib/spotifyHelpers/formatData';
import { SingleTrack } from '../../../lib/types/spotifyTypes';
import ArtistItem from './chartitems/ArtistItem';
import TrackItem from './chartitems/TrackItem';

type Props = {
  name: string;
  type: 'Track' | 'Artist';
  data:
    | FormatReturnType['recentTopTenTracks']
    | FormatReturnType['recentTopTenArtists'];
};

const ChartSection = (props: Props) => {
  return (
    <div className="bg-gray-600/5 flex flex-col justify-start items-center basis-1/2 text-white px-8 border-gray-500/10 border-[1px]">
      <div className="w-full text-center border-b-[1px] border-b-white/50">
        <div className="text-2xl font-bold">{props.name}</div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        {props.type == 'Track'
          ? props.data.map((track, index) => {
              return (
                <TrackItem track={track} key={track.id} index={index + 1} />
              );
            })
          : props.data.map((artist, index) => {
              return (
                <ArtistItem artist={artist} key={artist.id} index={index + 1} />
              );
            })}
      </div>
    </div>
  );
};

export default ChartSection;
