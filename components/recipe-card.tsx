//- components/recipe-card.tsx

import { Recipe } from "@/types/recipe";
import { MapPin } from "lucide-react";
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
        w-45
        sm:w-40
        lg:w-42
        xl:w-46
      ">
        <div className="relative border-b border-b-gray-300
          h-45
          sm:h-40
          lg:h-42
          xl:h-46
        ">
          <Image
            priority={true}
            src={recipe.image}
            alt={recipe.name}
            // width={45}
            // height={45}
            layout="fill"
            // objectFit="cover"
            sizes="45"
          />
        </div>
        <div className="px-3 py-2">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors">
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
