import React from 'react';
import { FormatReturnType } from '../../../lib/spotifyHelpers/formatData';
import Selector from '../selector/Selector';
import ArtistCard from './cards/ArtistCard';
import TrackCard from './cards/TrackCard';

type Props = {
  currentOption: number;
  track: FormatReturnType['topRecentTrack'];
  artist: FormatReturnType['topRecentArtist'];
};

const Favorites = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-4xl w-full">
      <div className="font-bold text-5xl text-indigo-900 text-center pb-4">
        Let&apos;s Start With Your Favorites
      </div>
      <div className="text-lg text-indigo-900 text-center">
        Get ready to feel cool. Or much less cool than you thought.
      </div>
      <div>
        <Selector currentOption={props.currentOption} />
      </div>
      <div className="w-full">
        <TrackCard track={props.track} />
      </div>
      <div className="w-full">
        <ArtistCard artist={props.artist} />
      </div>
    </div>
  );
};

export default Favorites;
