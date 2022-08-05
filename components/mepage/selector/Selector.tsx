import React from 'react';
import SelectorOption from './SelectorOption';

type Props = {
  currentOption: number;
  setCurrentOption: (option: number) => void;
};

const Selector = (props: Props) => {
  const onClick = (option: number) => {
    props.setCurrentOption(option);
  };

  return (
    <div className="flex flex-row items-center justify-center py-4 w-full mt-16 sm:mb-8 md:mb-16">
      <div onClick={() => onClick(1)}>
        <SelectorOption
          selected={props.currentOption == 1 ? true : false}
          text="Recent Listening"
        />
      </div>
      <div onClick={() => onClick(2)}>
        <SelectorOption
          selected={props.currentOption == 2 ? true : false}
          text="Spotify Lifetime"
        />
      </div>
    </div>
  );
};

export default Selector;
