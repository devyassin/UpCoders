import React from "react";
import { Skeleton } from "../shadcn/ui/skeleton";
const GigCardSkeleton = () => {
  return (
    <Skeleton className="rounded-[20px] h-[300px] flex flex-col"></Skeleton>
  );
};

export default GigCardSkeleton;
