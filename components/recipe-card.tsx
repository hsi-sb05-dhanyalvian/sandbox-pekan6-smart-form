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
      <div className="
        overflow-hidden 
        transition-shadow duration-300
        w-50
      ">
        <div className="aspect-square relative group">
          <Image
            priority={true}
            src={recipe.image}
            alt={recipe.name}
            layout="fill"
            sizes="45"
            className="border border-stone-200 rounded-xl"
          />
        </div>
        <div className="px-1 py-2">
          <h3 className="text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
            {recipe.name}
          </h3>
          <p className="text-sm text-secondary">
            {recipe.cuisine} • {recipe.difficulty}
          </p>
        </div>
      </div>
    </Link>
  );
}
