"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useDashboardSidebar } from "@/store/use-dashboard-sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface DashboardNavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
}

export const DashboardNavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
}: DashboardNavItemProps) => {
  const { collapsed } = useDashboardSidebar();
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-gray-700"
      )}>
      <Link href={href}>
        <div className="flex items-center gap-x-4">
          <Icon className={cn("h-5 w-5",collapsed?'mr-0':"mr-2")} />
          {!collapsed && (
            <span>{label}</span>
          )}
        </div>
      </Link>
    </Button>
  );
};

export const DashboardNavItemSkeleton = () =>{
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="bg-gray-700 min-h-[48px] min-w-[48px] rounded-md" />
      <div className="flex-1 hidden lg:block">
        <Skeleton className="bg-gray-700 h-6" />
      </div>
    </li>
  )
}