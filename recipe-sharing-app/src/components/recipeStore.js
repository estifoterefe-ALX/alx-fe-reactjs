import { create } from "zustand";
import createSelectors from "./utils/selector";
export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  filteredRecipes: [],
  recommendations: [],
  isSeaching: false,
  recipesById: () => Object.fromEntries(get().recipes.map((r) => [r.id, r])),

  addRecipe: (recipe) => {
    set((state) => ({
      recipes: [...state.recipes, recipe],
    }));
  },
  updateRecipe: (id, newRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...newRecipe } : recipe,
      ),
    }));
  },

  addToFavorites: (recipeId) => {
    const byId = get().recipesById();
    const recipe = byId[recipeId];
    if (recipe) {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
    }
  },
  setRecipes: (recipes) => {
    if (Array.isArray(recipes)) {
      set({ recipes });
    }
  },
  getRecipeById: (id) => {
    const byId = get().recipesById();
    const recipe = byId[id];
    return recipe;
  },
  removeFavoriteRecipe: (id) => {
    set((state) => {
      const fav = state.favorites.filter((i) => i.id !== id);
      return { favorites: fav };
    });
  },
  setSearchTerm: (term) => {
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase()) ||
          recipe.description.toLowerCase().includes(term.toLowerCase()),
      ),
    }));
  },
  setSearching: (i) => {
    set(() => ({
      isSeaching: i,
    }));
    if (i === false) {
      set(() => ({
        filteredRecipes: [],
      }));
    }
  },
  deleteRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((i) => i.id !== id);
      return { recipes: recipes };
    }),
}));

export const useStoreRecipe = createSelectors(useRecipeStore);
