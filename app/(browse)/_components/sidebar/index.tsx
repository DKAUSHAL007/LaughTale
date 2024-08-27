import { getRecommneded } from "@/lib/recommended-service";
import { getFollowedUser } from "@/lib/follow-service";

import { Toggle, ToggleSkeleton } from "./Toggle";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { Wrapper } from "./wrapper";
import { Following, FollowingSkeleton } from "./following";

export const Sidebar = async () => {
  const recommended = await getRecommneded();
  const following = await getFollowedUser();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={following} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-64 h-full bg-background border border-r border-[#2d2e35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />

    </aside>
  );
};
