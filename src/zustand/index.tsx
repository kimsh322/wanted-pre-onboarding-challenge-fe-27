import { create } from "zustand";

interface GlobalState {
  token: string | null;
  isLogin: boolean;
  setToken: (token: string | null) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  token: null,
  isLogin: false,
  setToken: (token) => set(() => ({ token })),
}));
