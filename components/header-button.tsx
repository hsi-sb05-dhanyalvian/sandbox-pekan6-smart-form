//- components/header-button.tsx

'use client';

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export const CreateBtn = () => {
  const path = usePathname();
  const params = useParams();
  const paramId = Number(params.id);
  const showBtn = ['/', '/recipes/' + paramId].includes(path);

  if (!showBtn) return null;

  return (
    <Link href="/recipes/add" className="input-button-primary px-3 py-1">
      Create Recipe
    </Link>
  );
};

export const BackBtn = () => {
  const path = usePathname();
  const showBtn = ['/recipes/add'].includes(path);

  if (!showBtn) return null;

  return (
    <Link href="/" className="input-button-secondary px-3 py-1">
      Back to homepage
    </Link>
  );
};
