"use client";

import { cn } from "@/lib/utils";
import { useDashboardSidebar } from "@/store/use-dashboard-sidebar";
interface DashboardSideWrapperProps {
  children: React.ReactNode;
}

export const DashboardSideWrapper = ({
  children,
}: DashboardSideWrapperProps) => {
  const { collapsed } = useDashboardSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-[70px] lg:w-64 h-full bg-background border-r border-[#2d2e35] z-50 transition-all",
        collapsed && 'lg:w-[70px]'
      )}>
      {children}
    </aside>
  );
};
