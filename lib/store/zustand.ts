import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { FormatReturnType } from '../spotifyHelpers/formatData';

interface AuthState {
  accessToken: string;
  refreshToken: string;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
}

interface SpotifyState {
  spotifyData: FormatReturnType | null;
  setSpotifyData: (spotifyData: FormatReturnType | null) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    accessToken: '',
    refreshToken: '',
    setAccessToken: (accessToken: string) => set(() => ({ accessToken })),
    setRefreshToken: (refreshToken: string) => set(() => ({ refreshToken }))
  }))
);

export const useSpotifyStore = create<SpotifyState>()(
  devtools((set) => ({
    spotifyData: {
      topRecentTrack: {
        name: '',
        url: '',
        artist: '',
        cover: ''
      },
      topAllTimeTrack: {
        name: '',
        url: '',
        artist: '',
        cover: ''
      },
      topRecentArtist: {
        name: '',
        image: '',
        url: '',
        topTrackName: '',
        topTrackUrl: ''
      },
      topAllTimeArtist: {
        name: '',
        image: '',
        url: '',
        topTrackName: '',
        topTrackUrl: ''
      },
      topRecentGenres: [['', 0]],
      topAllTimeGenres: [['', 0]],
      topRecentTrackFeatures: {
        danceability: {
          danceabilityCount: 0,
          topDanceabilityTracks: [
            {
              name: '',
              artists: [],
              album: {
                artists: [],
                external_urls: { spotify: '' },
                href: '',
                id: '',
                images: [],
                name: '',
                release_date: ''
              },
              external_urls: { spotify: '' },
              href: '',
              id: '',
              popularity: '',
              preview_url: ''
            }
          ]
        },
        energy: {
          energyCount: 0,
          topEnergyTracks: [
            {
              name: '',
              artists: [],
              album: {
                artists: [],
                external_urls: { spotify: '' },
                href: '',
                id: '',
                images: [],
                name: '',
                release_date: ''
              },
              external_urls: { spotify: '' },
              href: '',
              id: '',
              popularity: '',
              preview_url: ''
            }
          ]
        },
        instrumentalness: {
          instrumentalnessCount: 0,
          topInstrumentalnessTracks: [
            {
              name: '',
              artists: [],
              album: {
                artists: [],
                external_urls: { spotify: '' },
                href: '',
                id: '',
                images: [],
                name: '',
                release_date: ''
              },
              external_urls: { spotify: '' },
              href: '',
              id: '',
              popularity: '',
              preview_url: ''
            }
          ]
        },
        valence: {
          valenceCount: 0,
          topValenceTracks: [
            {
              name: '',
              artists: [],
              album: {
                artists: [],
                external_urls: { spotify: '' },
                href: '',
                id: '',
                images: [],
                name: '',
                release_date: ''
              },
              external_urls: { spotify: '' },
              href: '',
              id: '',
              popularity: '',
              preview_url: ''
            }
          ]
        }
      },
      topAllTimeTrackFeatures: {
        danceability: {
          danceabilityCount: 0,
          topDanceabilityTracks: [
            {
              name: '',
              artists: [],
              album: {
                artists: [],
                external_urls: { spotify: '' },
                href: '',
                id: '',
                images: [],
                name: '',
                release_date: ''
              },
              external_urls: { spotify: '' },
              href: '',
              id: '',
              popularity: '',
              preview_url: ''
            }
          ]
        },
        energy: {
          energyCount: 0,
          topEnergyTracks: [
            {
              name: '',
              artists: [],
              album: {
                artists: [],
                external_urls: { spotify: '' },
                href: '',
                id: '',
                images: [],
                name: '',
                release_date: ''
              },
              external_urls: { spotify: '' },
              href: '',
              id: '',
              popularity: '',
              preview_url: ''
            }
          ]
        },
        instrumentalness: {
          instrumentalnessCount: 0,
          topInstrumentalnessTracks: [
            {
              name: '',
              artists: [],
              album: {
                artists: [],
                external_urls: { spotify: '' },
                href: '',
                id: '',
                images: [],
                name: '',
                release_date: ''
              },
              external_urls: { spotify: '' },
              href: '',
              id: '',
              popularity: '',
              preview_url: ''
            }
          ]
        },
        valence: {
          valenceCount: 0,
          topValenceTracks: [
            {
              name: '',
              artists: [],
              album: {
                artists: [],
                external_urls: { spotify: '' },
                href: '',
                id: '',
                images: [],
                name: '',
                release_date: ''
              },
              external_urls: { spotify: '' },
              href: '',
              id: '',
              popularity: '',
              preview_url: ''
            }
          ]
        }
      },
      recentTopTenTracks: null,
      allTimeTopTenTracks: null,
      recentTopTenArtists: null,
      allTimeTopTenArtists: null
    },
    setSpotifyData: (spotifyData: FormatReturnType | null) =>
      set(() => ({ spotifyData }))
  }))
);
