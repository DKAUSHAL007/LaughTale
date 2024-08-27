"use client";

import { cn } from "@/lib/utils";
import { useDashboardSidebar } from "@/store/use-dashboard-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface DashDashBoardChildrenContainerProps {
  children: React.ReactNode;
}

export const DashBoardChildrenContainer = ({
  children,
}: DashDashBoardChildrenContainerProps) => {
  const { collapsed, onExpand, onCollapse } = useDashboardSidebar(
    (state) => state
  );
  const matches = useMediaQuery(`(max-width:1024px)`);
  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);
  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-64")}>
      {children}
    </div>
  );
};
