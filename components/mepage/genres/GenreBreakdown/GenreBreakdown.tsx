import React from 'react';
import { FormatReturnType } from '../../../../lib/spotifyHelpers/formatData';
import IndividualGenre from './IndividualGenre';

type Props = {
  topGenres: FormatReturnType['topAllTimeGenres'];
};

const GenreBreakdown = (props: Props) => {
  return (
    <div className="basis-1/2 flex flex-col">
      {props.topGenres.map((genre, key) => {
        return (
          <IndividualGenre
            genre={genre[0]}
            percentage={(genre[1] / 50) * 100}
          />
        );
      })}
    </div>
  );
};

export default GenreBreakdown;
