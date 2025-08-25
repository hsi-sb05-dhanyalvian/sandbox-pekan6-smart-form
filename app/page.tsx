//- app/page.tsx

"use client";

import { useQueries } from "@tanstack/react-query";
import { ApiClient, ApiDelay, ApiLimit } from "@/libs/api";
import { RecipesResponse } from "@/types/recipe";
import { RecipeBlock } from "@/components/recipe";

const paramSelect = 'name,image,cuisine,difficulty';
const paramLimit = ApiLimit;
const paramDelay = ApiDelay;

const ApiNewestRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await ApiClient.get('/recipes', {
    params: {
      select: paramSelect,
      limit: paramLimit,
      delay: paramDelay,
    }
  });
  return data;
}
const ApiAppetizerRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await ApiClient.get('/recipes/meal-type/appetizer', {
    params: {
      select: paramSelect,
      limit: paramLimit,
      delay: paramDelay,
    }
  });
  return data;
}
const ApiAsianRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await ApiClient.get('/recipes/tag/asian', {
    params: {
      select: paramSelect,
      limit: paramLimit,
      delay: paramDelay,
      sortBy: 'name',
      order: 'asc',
    }
  });
  return data;
}
const ApiLunchRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await ApiClient.get('/recipes/meal-type/lunch', {
    params: {
      select: paramSelect,
      limit: paramLimit,
      delay: paramDelay,
    }
  });
  return data;
}
const ApiDinnerRecipes = async (): Promise<RecipesResponse> => {
  const { data } = await ApiClient.get('/recipes/meal-type/dinner', {
    params: {
      select: paramSelect,
      limit: paramLimit,
      delay: paramDelay,
    }
  });
  return data;
}

const Homepage = () => {
  const results = useQueries({
    queries: [
      { queryKey: ['newest-recipes'], queryFn: ApiNewestRecipes },
      { queryKey: ['appetizer-recipes'], queryFn: ApiAppetizerRecipes },
      { queryKey: ['asian-recipes'], queryFn: ApiAsianRecipes },
      { queryKey: ['lunch-recipes'], queryFn: ApiLunchRecipes },
      { queryKey: ['dinner-recipes'], queryFn: ApiDinnerRecipes },
    ],
  });

  const newestQuery = results[0];
  const appetizerQuery = results[1];
  const asianQuery = results[2];
  const lunchQuery = results[3];
  const dinnerQuery = results[4];

  return (
    <>
      <RecipeBlock
        title="Newest Recipes"
        recipes={newestQuery.data?.recipes ?? []}
        isPending={newestQuery.isPending}
      />

      <RecipeBlock
        title="Appetizer Recipes"
        recipes={appetizerQuery.data?.recipes ?? []}
        isPending={newestQuery.isPending}
      />

      <RecipeBlock
        title="Asian Recipes"
        recipes={asianQuery.data?.recipes ?? []}
        isPending={newestQuery.isPending}
      />

      <RecipeBlock
        title="Lunch Recipes"
        recipes={lunchQuery.data?.recipes ?? []}
        isPending={newestQuery.isPending}
      />

      <RecipeBlock
        title="Dinner Recipes"
        recipes={dinnerQuery.data?.recipes ?? []}
        isPending={newestQuery.isPending}
      />
    </>
  );
}

export default Homepage;
