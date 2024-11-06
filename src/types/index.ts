import { InferOutput } from "valibot";
import { DrinkSchema } from "../utils/drink-schema";

export type DrinkResponseSchema = InferOutput<typeof DrinkSchema> 