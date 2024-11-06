import { object, string } from "valibot";

export const DrinkSchema = object({
  drinks : object({
    strCategory: string()
  })
})