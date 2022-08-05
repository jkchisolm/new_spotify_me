import React from 'react';
import SelectorOption from '../selector/SelectorOption';

type Props = {
  currentOption: number;
  setCurrentOption: (option: number) => void;
};

const FeatureSelector = (props: Props) => {
  const onClick = (option: number) => {
    props.setCurrentOption(option);
  };

  return (
    <div className="flex flex-row items-center justify-center py-4 w-full my-16 text-white">
      <div onClick={() => onClick(1)}>
        <SelectorOption
          selected={props.currentOption == 1 ? true : false}
          text="Danceability"
        />
      </div>
      <div onClick={() => onClick(2)}>
        <SelectorOption
          selected={props.currentOption == 2 ? true : false}
          text="Energy"
        />
      </div>
      <div onClick={() => onClick(3)}>
        <SelectorOption
          selected={props.currentOption == 3 ? true : false}
          text="Instrumentalness"
        />
      </div>
      <div onClick={() => onClick(4)}>
        <SelectorOption
          selected={props.currentOption == 4 ? true : false}
          text="Valence"
        />
      </div>
    </div>
  );
};

export default FeatureSelector;
