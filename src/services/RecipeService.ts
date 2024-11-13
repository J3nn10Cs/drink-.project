import axios from "axios";
import { DrinkSchema, filterSearchSchema } from "../utils/drink-schema";
import { SearchFilter } from "../types";

export async function getCategories() {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    const {data } = await axios(url)
    const result = DrinkSchema.reference(data)
    if(result){
      return result.entries
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getSearchFilter(search : SearchFilter){
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.ingredient}`
    const {data } = await axios(url);
    const result = filterSearchSchema.reference(data)
    if(result){
      return result.entries
    }
  } catch (error) {
    console.log(error);
  }
}