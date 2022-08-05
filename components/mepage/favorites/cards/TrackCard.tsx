import React from 'react';
import { FormatReturnType } from '../../../../lib/spotifyHelpers/formatData';
import Image from 'next/image';
import { BiPlayCircle } from 'react-icons/bi';

type Props = {
  track: FormatReturnType['topRecentTrack'];
};

const TrackCard = (props: Props) => {
  return (
    <div className="w-full min-w-full">
      <div className="flex flex-col md:flex-row justify-center items-stretch bg-black/[.05]">
        <div className="flex-grow text-white">
          <div className="flex flex-col justify-center items-start mt-8 mb-auto">
            <div className="text-lg bg-black/10  px-4 py-2 font-bold">
              Your Top Track
            </div>
            <div className="font-bold text-6xl bg-blue-900 w-full text-left py-2 pl-5 mt-6">
              {props.track.name.length > 30
                ? props.track.name.substring(0, 27) + '...'
                : props.track.name}
            </div>
            <div className="font-bold text-lg text-blue-900 bg-white text-right self-start py-2 px-5">
              {props.track.artist}
            </div>
            <div className="flex flex-row justify-center items-center mt-6 mb-auto self-start ml-4 h-full">
              <div>
                <a href={props.track.url} target="_blank" rel="noreferrer">
                  <BiPlayCircle className="text-white text-5xl" />
                </a>
              </div>
              <div className="flex flex-col justify-center items-start px-2 text-white">
                <div className="font-bold">{props.track.name}</div>
                <div>{props.track.artist}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full min-w-full max-w-full h-[24rem] min-h-[24rem]
        md:w-[25rem] md:max-w-[25rem] md:min-w-[25rem] md:h-[25rem] md:max-h-[25rem] relative"
        >
          <Image
            src={props.track.cover}
            // width={400}
            // height={400}
            layout="fill"
            alt="Track cover image"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
