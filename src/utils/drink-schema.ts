import { array, nullable, object, string } from "valibot";

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

export const RecipeAPIResponseSchema = object({
  idDrink: string(),  
  strDrink: string(),
  strDrinkThumb: string(),
  strInstructions: string(),
  strIngredient1: nullable(string()),
  strIngredient2: nullable(string()),
  strIngredient3: nullable(string()),
  strIngredient4: nullable(string()),
  strIngredient5: nullable(string()),
  strIngredient6: nullable(string()),
  strMeasure1: nullable(string()),
  strMeasure2: nullable(string()),
  strMeasure3: nullable(string()),
  strMeasure4: nullable(string()),
  strMeasure5: nullable(string()),
  strMeasure6: nullable(string()),
});