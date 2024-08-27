"use client";
import { useEffect } from "react";
import {useMediaQuery} from "usehooks-ts";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  const matches = useMediaQuery('(max-width:1024px)')
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  useEffect(()=>{
    if(matches){
        onCollapse();
    }
    else{
        onExpand()
    }
  },[matches,onCollapse,onExpand])
  return (
    <div
      className={cn(
        "flex-1",
        collapsed
          ? "ml-[70px] transition-all"
          : "transition-all ml-[70px] lg:ml-64"
      )}>
      {children}
    </div>
  );
};
