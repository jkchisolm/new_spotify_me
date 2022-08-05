import React from 'react';
import { FormatReturnType } from '../../../../lib/spotifyHelpers/formatData';
import IndividualGenre from './IndividualGenre';

type Props = {
  topGenres: FormatReturnType['topAllTimeGenres'];
};

const GenreBreakdown = (props: Props) => {
  return (
    <div className="w-full md:basis-1/2 flex flex-col">
      {props.topGenres.map((genre) => {
        return (
          <IndividualGenre
            key={genre[0]}
            genre={genre[0]}
            percentage={(genre[1] / 50) * 100}
          />
        );
      })}
    </div>
  );
};

export default GenreBreakdown;
