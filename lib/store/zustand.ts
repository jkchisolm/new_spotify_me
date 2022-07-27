import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string;
  refreshToken: string;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist((set) => ({
      accessToken: '',
      refreshToken: '',
      setAccessToken: (accessToken: string) => set(() => ({ accessToken })),
      setRefreshToken: (refreshToken: string) => set(() => ({ refreshToken }))
    }))
  )
);
