import { StateCreator } from "zustand"
import { getCategories, getSearchFilter } from "../services/RecipeService"
import type { Categories, Filter, SearchFilter } from "../types"

export type RecipeSliceType = {
  categories: Categories,
  filter : Filter
  fetchCategories: () => Promise<void>
  fetchSearch: (search: SearchFilter) => Promise<void>
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
  
})