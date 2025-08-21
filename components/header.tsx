//- components/header.tsx

import { ChefHat } from "lucide-react";
import Link from "next/link";
import { BackBtn, CreateBtn } from "./header-button";

const Header = () => {
  return (
    <nav className="
      fixed top-0 right-0 z-50
      w-full
      justify-between
      bg-nav/80 backdrop-blur-md
      border-b border-b-boundary
      shadow-xs
    ">
      <div className="container mx-auto px-4 py-4 flex">
        <div className="flex flex-1">
          <Link href="/" className="flex justify-start items-center gap-2">
            <ChefHat size={26} />
            <span className="text-2xl font-bold text-gray-900 mt-1">Our Kitchen</span>
          </Link>
        </div>

        <div className="flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0n mx-auto">
          <CreateBtn />
          <BackBtn />
        </div>
      </div>
    </nav>
  );
}

export default Header;
