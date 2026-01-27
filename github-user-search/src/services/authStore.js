// stores/authStore.js
import create from "zustand";
import createSelectors from "./utils/selector";

export const useAuthStore = create((set, get) => ({
  user: null, // user info
  token: import.meta.env.VITE_APP_ACCESS_TOKEN, // access token only (in memory)

  // login: store user and token in memory
  login: (user, token) => set({ user, token }),

  // logout: clear user and token
  logout: () => set({ user: null, token: null }),

  isLoggedIn: () => !!get().token,
}));

export const useAuthStoreSelectors = createSelectors(useAuthStore);
