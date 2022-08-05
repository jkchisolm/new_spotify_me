import React from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import { SingleTrack } from '../../../../lib/types/spotifyTypes';

type Props = {
  track: SingleTrack;
};

const TrackCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center mx-8 mt-6 mb-8 h-[26rem]">
      <div className="w-64 h-64">
        <img src={props.track.album.images[0].url} />
      </div>
      <div className="flex flex-row justify-start items-start w-full pt-3 max-w-[16rem]">
        <div>
          <BiPlayCircle className="text-white text-5xl" />
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
