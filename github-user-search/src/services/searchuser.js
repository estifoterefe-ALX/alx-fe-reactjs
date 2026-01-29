import { create } from "zustand";

const useSearchUserStore = create((set) => ({
  searchResult: null,
  setSearchResult: (userData) => set({ searchResult: userData }),
  clearSearchResult: () => set({ searchResult: null }),
  pageperPage: 10,
  incPageNo: () => set((state) => ({ pageperPage: state.pageperPage + 10 })),
  input: "",
  setInput: (input) => set({ input }),
  query: "",
  setQuery: (query) => set({ query }),
  noItems: 0,
  setNoItems: (count) => set({ noItems: count }),
}));

export default useSearchUserStore;
