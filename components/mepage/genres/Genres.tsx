import React from 'react';
import { FormatReturnType } from '../../../lib/spotifyHelpers/formatData';
import GenreBreakdown from './GenreBreakdown/GenreBreakdown';
import GenreDescriptor from './GenreDescriptor';

type Props = {
  topGenres: FormatReturnType['topAllTimeGenres'];
};

const Genres = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mt-32 w-10/12">
      <div className="text-5xl font-bold text-indigo-900">
        Here&apos;s How You Listen
      </div>
      <div className="text-lg text-indigo-900 mt-2">
        Let&apos;s break it down.
      </div>
      <div className="flex flex-row justify-center items-center mt-8">
        <GenreDescriptor topGenre={props.topGenres[0]} />
        <GenreBreakdown topGenres={props.topGenres} />
      </div>
    </div>
  );
};

export default Genres;
