"use client";

import { useSidebar } from "@/store/useSidebar";
import { Follow, Stream, User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./useritem";

interface FollowingProps {
  data: (Follow & {
    following: User & {
      stream: { isLive: boolean } | null;
    };
  })[];
}

export const Following = ({ data }: FollowingProps) => {
  const { collapsed } = useSidebar((state) => state);

  if (!data.length) {
    return null;
  }
  return (
    <div>
      {!collapsed && (
        <div className="pl-4 mb-4">
          <p className="text-small text-muted-foreground">Following</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        <li>
          {data.map((follow) => (
            <UserItem
              key={follow.following.id}
              username={follow.following.username}
              imageUrl={follow.following.imageUrl}  
              isLive={follow.following.stream?.isLive}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export const FollowingSkeleton = () => {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[...Array(6)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
