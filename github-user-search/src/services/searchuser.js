import { create } from "zustand";

const useSearchUserStore = create((set) => ({
  searchResult: null,
  setSearchResult: (userData) => set({ searchResult: userData }),
  clearSearchResult: () => set({ searchResult: null }),
}));

export default useSearchUserStore;
