import React from "react";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
  return (
    <Card className="relative w-[25rem] p-5 h-full flex flex-col">
      <div className="w-full h-1/2 relative overflow-hidden">
        <Skeleton className="absolute w-full h-full rounded-3xl" />
      </div>
      <div className="pt-5 space-y-2">
        <Skeleton className="w-1/2 h-10" />
        <Skeleton className="h-10" />
        <div className="flex justify-between items-center">
          <Skeleton className="w-32 h-10" />
          <Skeleton className="w-10 h-10" />
        </div>
      </div>
    </Card>
  );
}
