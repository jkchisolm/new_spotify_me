import Image from 'next/image';
import React from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import { SingleTrack } from '../../../../lib/types/spotifyTypes';

type Props = {
  track: SingleTrack;
};

const TrackCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center mx-8 sm:mt-2 md:mt-6 sm:mb-4 md:mb-8 h-[26rem]">
      <div className="w-64 max-w-[16rem] h-64 max-h-[16rem] relative">
        <Image
          src={props.track.album.images[0].url}
          layout="fill"
          alt="Image of the track cover."
        />
      </div>
      <div className="flex flex-row justify-start items-start w-full pt-3 max-w-[16rem]">
        <div>
          <a
            href={props.track.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <BiPlayCircle className="text-white text-5xl" />
          </a>
        </div>
        <div className="pl-2">
          <div className="text-xl font-bold text-white">{props.track.name}</div>
          <div className="text-lg text-white">
            {props.track.artists[0].name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
