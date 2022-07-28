import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
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
    spotifyData: null,
    setSpotifyData: (spotifyData: FormatReturnType | null) =>
      set(() => ({ spotifyData }))
  }))
);
