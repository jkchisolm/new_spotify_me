import React from 'react';

type Props = {
  handleClick: () => void;
  text: string;
};
const GetStartedButton = (props: Props) => {
  return (
    <div
      onClick={props.handleClick}
      className="border-4 border-white rounded-full text-lg
     text-white px-16 py-3 my-2 hover:bg-white hover:text-indigo-900 hover:cursor-pointer"
    >
      {props.text}
    </div>
  );
};

export default GetStartedButton;
