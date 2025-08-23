//- app/recipes/[id]/page.tsx

'use client';

import LoaderComp from '@/components/loader';
import { ApiClient } from '@/libs/api';
import { Recipe } from '@/types/recipe';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image'
import { useParams } from "next/navigation";


const RecipeDetailPage = () => {
  const id = useParams().id as string
  const recipeId = parseInt(id, 10);
  const ApiRecipeDetail = async (id: number): Promise<Recipe> => {
    const { data } = await ApiClient.get(`/recipes/${id}`);
    return data;
  };

  const { data: recipe, isLoading, isError, error } = useQuery({
    queryKey: ['recipe', recipeId],
    queryFn: () => ApiRecipeDetail(recipeId),
    enabled: !!recipeId,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  if (isError || recipe === null) {
    return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
  }

  if (isLoading) {
    return <LoaderComp />;
  }

  if (!recipe) {
    return <div className="text-center mt-10">Resep tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{recipe.name}</h2>
        <p className="text-sm/6 text-secondary">{recipe.tags.join(', ')}</p>
      </div>

      <div className="mb-6">
        <Image
          src={recipe.image}
          alt={recipe.name}
          className="w-full aspect-video object-cover rounded-2xl shadow"
          width={768}
          height={432}
        />
      </div>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
        <div className="p-4 bg-gray-100 rounded-xl">
          <p className="text-lg font-semibold">{recipe.prepTimeMinutes} min</p>
          <p className="text-sm text-gray-600">Prep Time</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl">
          <p className="text-lg font-semibold">{recipe.cookTimeMinutes} min</p>
          <p className="text-sm text-gray-600">Cook Time</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl">
          <p className="text-lg font-semibold">{recipe.cuisine}</p>
          <p className="text-sm text-gray-600">Cuisine</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl">
          <p className="text-lg font-semibold">{recipe.difficulty}</p>
          <p className="text-sm text-gray-600">Difficulty</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-outside pl-6 space-y-1 text-gray-700">
            {recipe.ingredients.map((value, key) => (
              <li key={key} className='text-sm'>{value}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-outside pl-6 space-y-1 text-gray-700">
            {recipe.instructions.map((value, key) => (
              <li key={key} className='text-sm'>{value}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-8 bg-yellow-50 p-4 rounded-xl border border-yellow-200 mb-8">
        <h3 className="text-lg font-semibold mb-2">Chef’s Tips</h3>
        <p className="text-sm text-gray-700">
          Don’t scramble the eggs! Mix them in off the heat with just enough pasta water to make it creamy.
        </p>
      </section>
    </div>
  )
}

export default RecipeDetailPage;
