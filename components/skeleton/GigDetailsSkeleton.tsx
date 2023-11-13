import React from "react";
import { Skeleton } from "../shadcn/ui/skeleton";

const GigDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 mx-6 gap-6 pt-10">
      <div className="flex flex-col space-y-4 max-md:col-span-2">
        <Skeleton className="h-[80px] max-md:h-[300px] rounded-xl" />
        <Skeleton className="h-[80px] max-md:h-[300px] rounded-xl" />
        <Skeleton className="h-[300px] rounded-xl" />
      </div>
      <Skeleton />
    </div>
  );
};

export default GigDetailsSkeleton;
