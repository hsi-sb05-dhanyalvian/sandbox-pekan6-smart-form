//- components/recipe.tsx

import { RecipesProps, RecipesResponse } from "@/types/recipe";
import RecipeCard from "./recipe-card";

export const RecipeBlock = ({ title, recipes }: RecipesProps) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid mt-3
        grid-cols-2 gap-10
        md:grid-cols-4 md:gap-8
        lg:grid-cols-5 lg:gap-8
        xl:grid-cols-7 xl:gap-10
      ">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
