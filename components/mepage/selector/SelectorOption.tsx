import React from 'react';

type Props = {
  selected: boolean;
  text: string;
};

const SelectorOption = (props: Props) => {
  return (
    <div
      className={`text-indigo-900 text-md font-bold mx-3 mb-3 md:mb-0 ${
        props.selected
          ? 'border-b-2 border-b-indigo-900'
          : 'border-b-2 border-transparent'
      }`}
    >
      {props.text}
    </div>
  );
};

export default SelectorOption;
