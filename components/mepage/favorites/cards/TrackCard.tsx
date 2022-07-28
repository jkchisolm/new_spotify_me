import React from 'react';
import { FormatReturnType } from '../../../../lib/spotifyHelpers/formatData';
import Image from 'next/image';
import { BiPlayCircle } from 'react-icons/bi';

type Props = {
  track: FormatReturnType['topRecentTrack'];
};

const TrackCard = (props: Props) => {
  return (
    <div className="flex flex-row justify-center items-stretch rounded-sm w-full">
      <div className="h-auto min-h-full max-h-[400px] flex flex-col justify-space-between items-stretch max-w-lg bg-black/[.05] w-full">
        <div className="font-bold text-lg text-white bg-black/10 self-start my-8 px-4 py-2">
          Your Top Track
        </div>
        <div className="font-bold text-6xl text-white break-words bg-blue-900 py-2 pr-10 pl-5 max-w-4xl text-left w-full">
          {props.track.name}
        </div>
        <div className="font-bold text-xl text-blue-900 ml-4 py-2 px-10 text-left bg-white self-start">
          {props.track.artist}
        </div>
        <div className="flex flex-row justify-center items-center mt-6 mb-auto self-start ml-16 h-full">
          <div>
            <BiPlayCircle className="text-white text-5xl" />
          </div>
          <div className="flex flex-col justify-center items-start px-2 text-white">
            <div className="font-bold">{props.track.artist}</div>
            <div>{props.track.name}</div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={props.track.cover}
          width={400}
          height={400}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default TrackCard;
