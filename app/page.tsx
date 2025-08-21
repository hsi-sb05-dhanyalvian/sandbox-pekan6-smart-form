//- app/page.tsx

"use client";

import { useQueries } from "@tanstack/react-query";
import { apiClient } from "@/libs/api";
import { RecipesResponse } from "@/types/recipe";
import LoaderComp from "@/components/loader";
import { RecipeBlock } from "@/components/recipe";

const paramSelect = 'name,image,cuisine,difficulty';
const paramLimit = 7;

const ApiNewestRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await apiClient.get('/recipes', {
    params: {
      select: paramSelect,
      limit: paramLimit,
    }
  });
  return data;
}
const ApiAppetizerRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await apiClient.get('/recipes/meal-type/appetizer', {
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
      { queryKey: ['newest-recipes'], queryFn: ApiNewestRecipes },
      { queryKey: ['appetizer-recipes'], queryFn: ApiAppetizerRecipes },
      { queryKey: ['breakfast-recipes'], queryFn: ApiBreakfastRecipes },
      { queryKey: ['lunch-recipes'], queryFn: ApiLunchRecipes },
      { queryKey: ['dinner-recipes'], queryFn: ApiDinnerRecipes },
    ],
  });

  const newestQuery = results[0];
  const appetizerQuery = results[1];
  const breakfastQuery = results[2];
  const lunchQuery = results[3];
  const dinnerQuery = results[4];

  return (
    <>
      {newestQuery.isPending && (<LoaderComp />)}

      <RecipeBlock
        title="Newest Recipes"
        recipes={newestQuery.data?.recipes ?? []}
      />
      
      <RecipeBlock
        title="Appetizer Recipes"
        recipes={appetizerQuery.data?.recipes ?? []}
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

