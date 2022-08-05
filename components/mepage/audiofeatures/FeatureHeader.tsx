import React from 'react';

type Props = {
  slogan: string;
  percentage: number;
  feature: string;
};

const FeatureHeader = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <div className="text-xl font-bold text-white">{props.slogan}</div>
      <div className="text-4xl md:text-6xl text-center font-bold text-white py-4">
        {props.percentage}% of your tracks are {props.feature}
      </div>
    </div>
  );
};

export default FeatureHeader;
