import Image from 'next/image';
import React from 'react';
import {
  ExtendedArtist,
  SingleTrack
} from '../../../../lib/types/spotifyTypes';

type Props = {
  artist: ExtendedArtist;
  index: number;
};

const ArtistItem = (props: Props) => {
  return (
    <div className="flex flex-row justify-start items-center w-full py-3">
      <div className="flex flex-col justify-center items-center w-32 max-w-[8rem] h-32 max-h-[8rem] relative">
        <Image
          layout="fill"
          className="rounded-full"
          src={props.artist.images[0].url}
          alt="Image of the track cover."
        />
      </div>
      <div className="flex flex-row justify-between items-center w-3/4 pl-5">
        <div className="flex flex-col justify-center items-start w-3/4 pl-5">
          <div className="text-xl font-bold text-white">
            {props.artist.name}
          </div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">#{props.index}</div>
        </div>
      </div>
    </div>
  );
};

export default ArtistItem;
