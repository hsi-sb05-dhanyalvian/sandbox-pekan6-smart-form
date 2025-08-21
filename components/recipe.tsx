//- components/recipe.tsx

import { RecipesProps } from "@/types/recipe";
import RecipeCard from "./recipe-card";

export const RecipeBlock = ({ title, recipes }: RecipesProps) => {
  return (
    <div className="mb-7">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid mt-3
        grid-cols-2 gap-6
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-7
      ">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
