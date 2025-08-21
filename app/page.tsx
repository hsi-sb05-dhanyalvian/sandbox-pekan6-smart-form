//- app/page.tsx

"use client";

import { useQueries, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { apiClient, apiDelay } from "@/libs/api";
import { RecipesResponse } from "@/types/recipe";
import LoaderComp from "@/components/loader";
import { RecipeBlock } from "@/components/recipe";

const paramSelect = 'name,image,cuisine,difficulty';
const paramLimit = 7;

const ApiRecipeNewest = async (): Promise<RecipesResponse> => {
  const { data } = await apiClient.get('/recipes', {
    params: {
      select: paramSelect,
      limit: paramLimit,
    }
  });
  return data;
}
const ApiBreakfastRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await apiClient.get('/recipes/meal-type/breakfast', {
    params: {
      select: paramSelect,
      limit: paramLimit,
    }
  });
  return data;
}
const ApiLunchRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await apiClient.get('/recipes/meal-type/lunch', {
    params: {
      select: paramSelect,
      limit: paramLimit,
    }
  });
  return data;
}
const ApiDinnerRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await apiClient.get('/recipes/meal-type/dinner', {
    params: {
      select: paramSelect,
      limit: paramLimit,
    }
  });
  return data;
}

const Homepage = () => {
  const results = useQueries({
    queries: [
      { queryKey: ['newest-recipes'], queryFn: ApiRecipeNewest },
      { queryKey: ['breakfast-recipes'], queryFn: ApiBreakfastRecipes },
      { queryKey: ['lunch-recipes'], queryFn: ApiLunchRecipes },
      { queryKey: ['dinner-recipes'], queryFn: ApiDinnerRecipes },
    ],
  });

  const newestQuery = results[0];
  const breakfastQuery = results[1];
  const lunchQuery = results[2];
  const dinnerQuery = results[3];

  return (
    <>
      {newestQuery.isPending && (<LoaderComp />)}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Kitchen</h1>
        <Link href="/recipes/add" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
          + Tambah Resep
        </Link>
      </div>

      <RecipeBlock
        title="Newest Recipes"
        recipes={newestQuery.data?.recipes ?? []}
      />
      
      <RecipeBlock
        title="Breakfast Recipes"
        recipes={breakfastQuery.data?.recipes ?? []}
      />
      
      <RecipeBlock
        title="Lunch Recipes"
        recipes={lunchQuery.data?.recipes ?? []}
      />
      
      <RecipeBlock
        title="Dinner Recipes"
        recipes={dinnerQuery.data?.recipes ?? []}
      />
    </>
  );
}

export default Homepage;

