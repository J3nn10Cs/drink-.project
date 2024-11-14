import { StateCreator } from "zustand";
import { RecipeDetails } from "../types";

export type FavoritesSliceTyoe = {
  favorites : RecipeDetails[]
  handleClickFavorite : (recipe : RecipeDetails) => void
  favoriteExist: (id: RecipeDetails['idDrink']) => boolean
  loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceTyoe> = (set, get) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    //some -> si existe
    if(get().favoriteExist(recipe.idDrink)){
      set({
        //si existe lo eliminamos
        favorites : get().favorites.filter(fav => fav.idDrink !== recipe.idDrink),
      })
    }else{
      set({
        //si aun no existe lo agregamos
        favorites : [...get().favorites, recipe]
      })
    }

    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },

  favoriteExist : (id) => {
    return get().favorites.some(fav => fav.idDrink === id)
  },

  loadFromStorage : () => {
    //obteniendo los favporites
    const storedFavorites = localStorage.getItem('favorites')
    if(storedFavorites){
      set({
        favorites: JSON.parse(storedFavorites)
      })
    }
  }
})