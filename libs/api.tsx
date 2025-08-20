//- libs/api.tsx

import axios from 'axios';
import { Recipe, RecipesResponse } from '@/types/recipe';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CONFIG_API_URL ?? 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 123456',
  },
});

export const apiDelay = Number(process.env.NEXT_PUBLIC_CONFIG_API_DELAY ?? 1000);

// Fungsi untuk mengambil SEMUA resep
export const getRecipes = async (): Promise<RecipesResponse> => {
  const response = await apiClient.get('/recipes');
  return response.data;
};

// Fungsi untuk mengambil SATU resep berdasarkan ID
export const getRecipeById = async (id: number): Promise<Recipe> => {
  const response = await apiClient.get(`/recipes/${id}`);
  return response.data;
};

type NewRecipeData = Omit<Recipe, 'id' | 'userId' | 'rating' | 'reviewCount'>;

// Fungsi untuk MENAMBAH resep baru
export const addRecipe = async (newRecipe: NewRecipeData): Promise<Recipe> => {
  const response = await apiClient.post('https://mahir.free.beeceptor.com', newRecipe);
  // dummyjson akan mengembalikan resep yang baru dibuat beserta ID-nya
  return response.data;
};
