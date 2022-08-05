import Image from 'next/image';
import React from 'react';
import { SingleTrack } from '../../../../lib/types/spotifyTypes';

type Props = {
  track: SingleTrack;
  index: number;
};

const TrackItem = (props: Props) => {
  return (
    <div className="flex flex-row justify-start items-center w-full py-3">
      <div className="flex flex-col justify-center items-center w-32 max-w-[8rem] h-32 max-h-[8rem] hidden md:block relative">
        <Image
          layout="fill"
          className="rounded-full"
          src={props.track.album.images[0].url}
          alt="Image of the track cover."
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full md:w-3/4 md:pl-5">
        <div className="flex flex-col justify-center items-start w-full md:w-3/4 md:pl-5">
          <div className="text-xl font-bold text-white">{props.track.name}</div>
          <div className="text-lg text-white">
            {props.track.artists[0].name}
          </div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">#{props.index}</div>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
