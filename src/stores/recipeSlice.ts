import { StateCreator } from "zustand"
import { getCategories, getDetails, getSearchFilter } from "../services/RecipeService"
import type { Categories, Drink, Filter, SearchFilter } from "../types"

export type RecipeSliceType = {
  categories: Categories,
  filter : Filter
  fetchCategories: () => Promise<void>
  fetchSearch: (search: SearchFilter) => Promise<void>
  selectRecipe: (id : Drink['idDrink']) => Promise<void>
}

//para escribir en el state -> set
export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks:[
      
    ]
  },

  filter: {
    drinks : []
  },

  fetchCategories : async () => {
    const categories = await getCategories()
    set(() => ({
      categories
    }))
  },

  fetchSearch : async (search) => {
    const filter = await getSearchFilter(search)
    set(() => ({
      filter
    }))
  },

  selectRecipe : async (id) => {
      const details = await getDetails(id)
      console.log(details);
  }
  
})