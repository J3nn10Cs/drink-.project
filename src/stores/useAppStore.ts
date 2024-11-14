

import { create } from "zustand";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { FavoritesSliceTyoe, createFavoritesSlice } from "./favoriteSlice";

export const useAppStore = create <RecipeSliceType & FavoritesSliceTyoe> ((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a)
}))