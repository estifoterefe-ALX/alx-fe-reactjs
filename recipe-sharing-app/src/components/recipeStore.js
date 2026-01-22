import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorite: [],
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
        favorite: [...state.favorite, recipe],
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
      const fav = state.favorite.filter((i) => i.id !== id);
      return { favorite: fav };
    });
  },
  deleteRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((i) => i.id !== id);
      return { recipes: recipes };
    }),
}));
