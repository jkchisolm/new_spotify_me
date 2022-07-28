import React from 'react';
import SelectorOption from './SelectorOption';

type Props = {
  currentOption: number;
};

const Selector = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-center py-4 w-full my-16">
      <SelectorOption
        selected={props.currentOption == 1 ? true : false}
        text="Recent Listening"
      />
      <SelectorOption
        selected={props.currentOption == 2 ? true : false}
        text="Spotify Lifetime"
      />
    </div>
  );
};

export default Selector;
