import React from 'react';

type Props = {
  topGenre: [string, number];
};

const GenreDescriptor = (props: Props) => {
  return (
    <div className="text-4xl font-bold text-white basis-1/2">
      Your top genre is{' '}
      <span className="text-indigo-900 capitalize">
        {props.topGenre[0] == 'edm' ? 'EDM' : props.topGenre[0]}.{' '}
      </span>
      {(props.topGenre[1] / 50) * 100}% of your top artists fall within this
      genre.
    </div>
  );
};

export default GenreDescriptor;
