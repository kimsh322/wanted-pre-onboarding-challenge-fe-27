import { create } from "zustand";

interface GlobalState {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  token: null,
  setToken: (token) => set(() => ({ token })),
}));
