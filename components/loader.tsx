//- components/loader.tsx

import { LoaderCircle } from "lucide-react";

const LoaderComp = () => {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="flex justify-between px-4 py-3 items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-lg/5">
        <LoaderCircle className="flex h-12 w-12 animate-spin text-black" />
        <p className="flex font-semibold text-black">loading...</p>
      </div>
    </div>
  );
}

export default LoaderComp;
