import axios from "axios";
import { DrinkSchema } from "../utils/drink-schema";

export async function getCategories() {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    const {data : {drinks}} = await axios(url)
    const result = DrinkSchema.reference(drinks).entries
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}