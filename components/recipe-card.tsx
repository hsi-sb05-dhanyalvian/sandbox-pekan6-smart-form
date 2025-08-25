//- components/recipe-card.tsx

import { Recipe } from "@/types/recipe";
import Image from "next/image";
import Link from "next/link";

interface RecipeCardProps {
  isPending?: boolean;
  recipe?: Recipe;
}

export const RecipeCard = ({ isPending, recipe }: RecipeCardProps) => {
  if (isPending) {
    return (
      <div className="flex group">
        <RecipeCardBlock isPending={isPending} recipe={recipe} />
      </div>
    );
  }

  return (
    <Link href={`/recipes/${recipe?.id}`} className="flex group">
      <RecipeCardBlock isPending={isPending} recipe={recipe} />
    </Link>
  );
};

export const RecipeCardBlock = ({ isPending, recipe }: RecipeCardProps) => {
  return (
    <div className="
        w-50 overflow-hidden 
        transition-shadow duration-300
      ">
      <div className="aspect-square relative group">
        {isPending ? (
          <div className="w-full h-full bg-gray-200 border border-stone-200 rounded-xl animate-pulse"></div>
        ) : (
          <Image
            priority={true}
            src={recipe?.image ?? ""}
            alt={recipe?.name ?? ""}
            layout="fill"
            sizes="45"
            className="border border-stone-200 rounded-xl"
          />
        )}
      </div>
      <div className="px-1 py-2">
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
          {isPending
            ? (<div className="w-full h-4 rounded-full bg-gray-200 mt-1 animate-pulse"></div>)
            : recipe?.name
          }
        </h3>
        <div className="text-sm text-secondary">
          {isPending
            ? (
              <div className="h-3 grid grid-cols-2 gap-2 mt-2 animate-pulse">
                <div className="h-full rounded-full bg-gray-200"></div>
                <div className="h-full rounded-full bg-gray-200"></div>
              </div>
            )
            : `${recipe?.cuisine} • ${recipe?.difficulty}`
          }
        </div>
      </div>
    </div>
  );
};
