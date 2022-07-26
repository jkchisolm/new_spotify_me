import Image from 'next/image';
import React from 'react';
import { FormatReturnType } from '../../../../lib/spotifyHelpers/formatData';
import { BiPlayCircle } from 'react-icons/bi';
type Props = {
  artist: FormatReturnType['topRecentArtist'];
};

const ArtistCard = (props: Props) => {
  return (
    <div className="w-full min-w-full">
      <div className="flex flex-col md:flex-row justify-center items-stretch bg-black/[.05]">
        <div
          className="w-full min-w-full max-w-full h-[24rem] min-h-[24rem] 
        md:w-[25rem] md:max-w-[25rem] md:min-w-[25rem] md:h-[25rem] md:max-h-[25rem] relative"
        >
          <Image
            src={props.artist.image}
            // width={400}
            // height={400}
            layout="fill"
            alt="Artist cover image"
          />
        </div>
        <div className="flex-grow text-white">
          <div className="flex flex-col justify-center items-end mt-8 mb-auto">
            <div className="text-lg bg-black/10  px-4 py-2 font-bold">
              Your Top Artist
            </div>
            <div className="font-bold text-6xl bg-blue-900 w-full text-left py-2 pl-5 mt-6">
              {props.artist.name}
            </div>
            <div className="font-bold text-lg text-blue-900 bg-white text-right self-start py-2 px-4">
              {props.artist.topTrackName}
            </div>
            <div className="flex flex-row justify-center items-center mt-6 mb-auto self-start ml-4 h-full">
              <div>
                <a
                  href={props.artist.topTrackUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiPlayCircle className="text-white text-5xl" />
                </a>
              </div>
              <div className="flex flex-col justify-center items-start px-2 text-white">
                <div className="font-bold">{props.artist.name}</div>
                <div>{props.artist.topTrackName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
