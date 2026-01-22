import { create } from "zustand";

export const useRecipe = create((set, get) => ({
  recipes: [],
  favorite: [],
  recipesById: () => Object.fromEntries(get().recipes.map((r) => [r.id, r])),

  addRecipe: (recipe) => {
    set((state) => ({
      recipes: [...state.recipes, recipe],
    }));
  },
  addToFavorites: (recipeId) => {
    const byId = get().recipesById();
    const recipe = byId[recipeId];
    if (recipe) {
      set((state) => ({
        favorite: [...state.favorite, recipe],
      }));
    }
  },
  setRecipe: (recipes) => {
    if (Array.isArray(recipes)) {
      set({ recipes });
    }
  },
  removeFavoriteRecipe: (id) => {
    set((state) => {
      const fav = state.favorite.filter((i) => i.id !== id);
      return { favorite: fav };
    });
  },
  removeRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((i) => i.id !== id);
      return { recipes: recipes };
    }),
}));
