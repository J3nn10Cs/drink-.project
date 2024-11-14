import { InferOutput } from "valibot";
import { DrinkSchema, filterSearchSchema, filterSearchSchemaObject, RecipeAPIResponseSchema, SearchSchema } from "../utils/drink-schema";

//type de categorias
export type Categories = InferOutput<typeof DrinkSchema> 

export type SearchFilter = InferOutput<typeof SearchSchema>

export type Filter = InferOutput<typeof filterSearchSchema>

export type Drink = InferOutput<typeof filterSearchSchemaObject>

export type RecipeDetails = InferOutput<typeof RecipeAPIResponseSchema>