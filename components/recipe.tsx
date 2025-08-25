//- components/recipe.tsx

import { RecipesProps } from "@/types/recipe";
import { RecipeCard } from "./recipe-card";
import { ApiLimit } from "@/libs/api";

export const RecipeBlock = ({ title, recipes, isPending }: RecipesProps) => {
  let cards = [];

  if (isPending) {
    for (let i = 0; i < ApiLimit; i++) {
      cards.push(<RecipeCard key={i} isPending={isPending} />);
    }
  } else {
    cards = recipes?.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} isPending={isPending} />
    ));
  }

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid mt-3
        grid-cols-2 gap-6
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-7
      ">
        {cards}
      </div>
    </div>
  );
}
