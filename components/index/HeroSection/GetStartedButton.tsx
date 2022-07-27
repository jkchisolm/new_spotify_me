import React from 'react';

type Props = {
  handleClick: any;
};
const GetStartedButton = (props: Props) => {
  // const handleClick = () => {
  //   window.location.href =
  //     'https://accounts.spotify.com/authorize?' +
  //     new URLSearchParams({
  //       response_type: 'code',
  //       client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  //       scope: 'user-top-read user-read-recently-played',
  //       redirect_uri: 'http:/localhost:3000',
  //       state: 'xyzzyx'
  //     });
  // };

  return (
    <div
      onClick={props.handleClick}
      className="border-4 border-white rounded-full text-lg
     text-white px-16 py-3 my-2 hover:bg-white hover:text-indigo-900 hover:cursor-pointer"
    >
      GET STARTED
    </div>
  );
};

export default GetStartedButton;
