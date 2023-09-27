import { ReactNode } from "react";
import { Skeleton } from "../shadcn/ui/skeleton";

interface GigImageSkeletonProps {
  children: ReactNode;
  className?: string;
}
const GigImageSkeleton = ({ children, className }: GigImageSkeletonProps) => {
  return (
    <Skeleton
      className={`h-[50vh] border-black border-dashed w-full ${className}`}
    >
      {children}
    </Skeleton>
  );
};

export default GigImageSkeleton;
