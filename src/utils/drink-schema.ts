import { array, object, string } from "valibot";

export const DrinkSchema = object({
  drinks : array(
    object({
      strCategory: string()
    })
  )
})

export const SearchSchema = object({
  ingredient : string(),
  category : string()
})

export const filterSearchSchemaObject = object({
  idDrink : string(),
  strDrink : string(),
  strDrinkThumb : string()
})

export const filterSearchSchema = object({
  drinks : array(filterSearchSchemaObject)
}) 
