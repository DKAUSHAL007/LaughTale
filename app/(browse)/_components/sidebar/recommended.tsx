"use client";

import { useSidebar } from "@/store/useSidebar";
import { Stream, User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./useritem";

interface RecommendedProps {
  data: (User & {
    stream: { isLive: boolean } | null;
  })[];
}

export const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state);
  const showLabel = !collapsed && data.length > 0;
  console.log(data);
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        <li>
          {data.map((user) => (
            <UserItem
              key={user.id}
              username={user.username}
              imageUrl={user.imageUrl}
              isLive={user.stream?.isLive}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};
export const RecommendedSkeleton = () => {
  return (
    <ul className="px-2 mt-10">
      {[...Array(6)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
