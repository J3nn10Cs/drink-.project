import { StateCreator } from "zustand"
import { getCategories, getDetails, getSearchFilter } from "../services/RecipeService"
import type { Categories, Drink, Filter, RecipeDetails, SearchFilter } from "../types"

export type RecipeSliceType = {
  categories: Categories,
  filter : Filter
  details : RecipeDetails
  fetchCategories: () => Promise<void>
  fetchSearch: (search: SearchFilter) => Promise<void>
  selectRecipe: (id : Drink['idDrink']) => Promise<void>
  modal : boolean
  closeModal :  () => void
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

  details : { } as RecipeDetails,

  modal : false,

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
    set(() =>({
      modal: true,
      details
    }))
  },

  closeModal : () => {
    set(() => ({
      details : {} as RecipeDetails,
      modal: false
    }))
  }
})