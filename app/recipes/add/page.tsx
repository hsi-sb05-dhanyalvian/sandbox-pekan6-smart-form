//- app/recipes/add/page.tsx

'use client';

import { FormCheckbox, FormInputText, FormInputTextarea, FormSelectOption } from "@/libs/form";
import { QueryClient, useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Recipe } from "@/types/recipe";
import { RecipeFormData, recipeFormSchema } from "@/validations/recipe";
import { apiClient, apiDelay } from "@/libs/api";
import { NotifMsg, NotifTimeout } from "@/libs/messages";
import LoaderComp from "@/components/loader";
import { CircleArrowLeft } from "lucide-react";

type NewRecipeData = Omit<Recipe, 'id' | 'userId' | 'rating' | 'reviewCount'>;
const ApiRecipeAdd = async (newRecipe: NewRecipeData): Promise<Recipe> => {
  const response = await apiClient.post('/recipes/add?delay=' + apiDelay, newRecipe);
  return response.data;
};

const RecipeAddPage = () => {
  const queryClient = new QueryClient();
  const [successMsg, setSuccessMsg] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<RecipeFormData>({
    resolver: zodResolver(recipeFormSchema) as Resolver<RecipeFormData>,
    defaultValues: {
      ingredients: [],
      instructions: [],
      mealType: [],
      tags: [],
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ['RecipeAdd'],
    mutationFn: (newRecipe: Omit<Recipe, "id" | "userId" | "rating" | "reviewCount">) => ApiRecipeAdd(newRecipe),
    onSuccess: (data: Recipe) => {
      console.log("Recipe added successfully:", data);
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
      setSuccessMsg(`Recipe "${data.name}" added successfully.`);
      setTimeout(() => setSuccessMsg(''), NotifTimeout);
      reset();
    },
    onError: (error: Error) => {
      console.error("Error adding recipe:", error);
      alert("Failed to add recipe. Please try again.");
    }
  });

  const onSubmit: SubmitHandler<RecipeFormData> = async (data: RecipeFormData) => {
    mutateAsync(data);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* {isPending && ( */}
        <LoaderComp />
        {/* )} */}
      {successMsg && (<NotifMsg message={successMsg} />)}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-8">
            <h2 className="text-2xl font-semibold">Add Recipe</h2>
            <Link className="flex justify-start items-center gap-1 text-sm text-gray-400 hover:text-gray-700 cursor-pointer" href="/">
              <CircleArrowLeft size={18} />
              <span className="hover:underline">back to list</span>
            </Link>

            <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-6">
              <FormInputText
                id="name"
                label="Recipe Name"
                column={true}
                register={register}
                error={errors.name?.message}
              />

              <FormInputText
                id="cuisine"
                label="Cuisine"
                column={true}
                register={register}
                error={errors.cuisine?.message}
              />

              <FormInputText
                type="url"
                id="image"
                label="Image URL"
                column={true}
                placeholder="https://example.com/image.jpg"
                register={register}
                error={errors.image?.message}
              />

              <FormSelectOption
                id="difficulty"
                label="Difficulty"
                register={register}
                column={true}
                values={[
                  "Easy",
                  "Medium",
                  "Hard"
                ]}
                error={errors.difficulty?.message}
              />

              <FormInputText
                type="number"
                id="prepTimeMinutes"
                label="Preparation Time (minutes)"
                column={true}
                register={register}
                error={errors.prepTimeMinutes?.message}
              />

              <FormInputText
                type="number"
                id="cookTimeMinutes"
                label="Cook Time (minutes)"
                column={true}
                register={register}
                error={errors.cookTimeMinutes?.message}
              />

              <FormInputText
                type="number"
                id="servings"
                label="Servings"
                column={true}
                register={register}
                error={errors.servings?.message}
              />

              <FormInputText
                type="number"
                id="caloriesPerServing"
                label="Calories per Serving"
                column={true}
                register={register}
                error={errors.caloriesPerServing?.message}
              />

              <FormInputTextarea
                id="ingredients"
                label="Ingredients (one per line)"
                column={true}
                register={register}
                error={errors.ingredients?.message}
              />

              <FormInputTextarea
                id="instructions"
                label="Instructions (one per line)"
                column={true}
                register={register}
                error={errors.instructions?.message}
              />

              <FormCheckbox
                name="mealType"
                label="Meal Type"
                values={[
                  { value: "Appetizer", label: "Appetizer" },
                  { value: "Beverage", label: "Beverage" },
                  { value: "Breakfast", label: "Breakfast" },
                  { value: "Dessert", label: "Dessert" },
                  { value: "Dinner", label: "Dinner" },
                  { value: "Lunch", label: "Lunch" },
                  { value: "Side Dish", label: "Side Dish" },
                  { value: "Snack", label: "Snack" },
                ]}
                register={register}
                column={true}
                error={errors.mealType?.message}
              />

              <FormInputTextarea
                id="tags"
                label="Tags (one per line)"
                row={7}
                column={true}
                register={register}
                error={errors.tags?.message}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-start gap-x-3">
          <button
            type="submit"
            disabled={isPending}
            className="form-input-submit"
          >
            {isPending ? "Saving..." : "Save Recipe"}
          </button>
          <Link
            href="/"
            type="button"
            className="form-input-cancel"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RecipeAddPage;
