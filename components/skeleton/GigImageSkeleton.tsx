import { ReactNode } from "react";
import { Skeleton } from "../shadcn/ui/skeleton";

interface GigImageSkeletonProps {
  children: ReactNode;
}
const GigImageSkeleton = ({ children }: GigImageSkeletonProps) => {
  return (
    <Skeleton className="h-[50vh] border-black border-dashed w-full">
      {children}
    </Skeleton>
  );
};

export default GigImageSkeleton;
