//- components/recipe-card.tsx

import { Recipe } from "@/types/recipe";
import Image from "next/image";
import Link from "next/link";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.id}`} className="flex group">
      <div className="border border-gray-300 rounded-lg
        overflow-hidden shadow-sm hover:shadow-lg
        transition-shadow duration-300 bg-white
        w-50
      ">
        <div className="aspect-square relative border-b border-b-gray-300">
          <Image
            priority={true}
            src={recipe.image}
            alt={recipe.name}
            layout="fill"
            sizes="45"
          />
        </div>
        <div className="px-3 py-2">
          <h3 className="text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
            {recipe.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {recipe.cuisine} • {recipe.difficulty}
          </p>
        </div>
      </div>
    </Link>
  );
}
