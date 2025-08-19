//- validations/recipe.ts

import { boolean, z } from 'zod';

const minChar = 3;


export const recipeFormSchema = z.object({
  name: z.string().min(minChar),
  cuisine: z.string().min(minChar),
  image: z.url("Invalid image URL"),
  difficulty: z.string().min(minChar, "Difficulty is required."),
  prepTimeMinutes: z.coerce.number().int().min(1, "Preparation time must be a positive integer"),
  cookTimeMinutes: z.coerce.number().int().min(1, "Cooking time must be a positive integer"),
  servings: z.coerce.number().int().min(1, "Servings must be at least 1"),
  caloriesPerServing: z.coerce.number().int().min(1, "Calories per serving must be a positive integer"),
  ingredients: z.preprocess(
    (val) => {
      if (typeof val !== 'string') return [];
      return val.split('\n').map(item => item.trim()).filter(Boolean);
    },
    z.array(z.string().min(minChar)).min(1, "At least one Ingredient is required.")
  ),
  instructions: z.preprocess(
    (val) => {
      if (typeof val !== 'string') return [];
      return val.split('\n').map(item => item.trim()).filter(Boolean);
    },
    z.array(z.string().min(minChar)).min(1, "At least one Instructions is required.")
  ),
  mealType: z.array(z.string()).min(1, "At least one Meal type is required"),
  tags: z.preprocess(
    (val) => {
      if (typeof val !== 'string') return [];
      return val.split('\n').map(item => item.trim()).filter(Boolean);
    },
    z.array(z.string().min(minChar)).min(1, "At least one Tag is required.")
  ),
});

export type RecipeFormData = z.infer<typeof recipeFormSchema>;
