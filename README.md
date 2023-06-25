<h1 align="center">
Spotify.me recreation
</h1>

https://user-images.githubusercontent.com/67846583/185853734-d782da59-c683-4a3a-b29c-b881fe0a9d3a.mov

[![Version](https://img.shields.io/static/v1?label=version&message=1.0.0&color=blue)](https://shields.io/)
[![Netlify](https://img.shields.io/netlify/90204b60-24c4-4ab5-9bb7-1635a186f45b)](https://shields.io/)

### [🌐 Website](https://gleaming-donut-7dd30a.netlify.app/)

This project is a recreation of the now defunct Spotify-created statistics tracking page known as Spotify.me. This recreation was built solely by me.
All credit goes to Spotify for the idea and design. This is a personal project, not made for profit or commercial use.


## Tech Stack
- Framework: `React.js with Next.js`
- Styling: `TailwindCSS`

## Setup

### Requirements

The only requirements to set up and run this project are node.js and a package manager such as NPM or Yarn.

### Installation

1. Open your CLI and clone the repo -

```
git clone git@github.com:frozenal/new_spotify_me.git
cd new_spotify_me
```

2. Install the required dependencies

```
npm install
```

3. Set up your environment variables in a file titled .env.local. The file should be structured as such:
```
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=yourclientidgoeshere
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=yourclientsecretgoeshere
```
If you do not have a client ID or client secret, you must create an app in the Spotify developer dashboard. Instructions to do so, as well as set up the rest of your Spotify application, can be found [here.](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/)

4. Run the development server

```
npm run dev
```


## What I Learned
- Writing reuseable components
- Project structure

## Author
Joshua Chisolm
- Website: [joshuachisolm.com](https://www.joshuachisolm.com)

