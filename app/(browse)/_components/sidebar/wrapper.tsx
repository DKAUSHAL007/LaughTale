'use client'
import { cn } from "@/lib/utils"
import { useSidebar } from "@/store/useSidebar"

interface WrapperProps{
    children:React.ReactNode
};

export const Wrapper = ({
    children
}:WrapperProps) => {
    const { collapsed } = useSidebar((state)=>state)
    return(
        <aside 
            className={cn(
                "fixed left-0 flex flex-col w-[70px] lg:w-64 h-full transition-all bg-background border-r border-[#2d2e35] z-50",
                collapsed&&'lg:w-[70px]'
            )}
        >
            {children}
        </aside>
    )
}