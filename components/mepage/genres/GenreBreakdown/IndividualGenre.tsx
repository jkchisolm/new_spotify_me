import React from 'react';

type Props = {
  genre: string;
  percentage: number;
};

const IndividualGenre = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-start text-white mt-2">
      <span className="font-bold text-lg capitalize">
        {props.genre == 'edm' ? 'EDM' : props.genre}
      </span>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="bg-black/5 flex-grow" style={{ width: '100%' }}>
          <div
            className={`bg-indigo-900 h-8`}
            style={{ width: `${props.percentage}%` }}
          ></div>
        </div>
        <div className="text-white ml-2 font-bold">
          {Math.round(props.percentage)}%
        </div>
      </div>
    </div>
  );
};

export default IndividualGenre;
