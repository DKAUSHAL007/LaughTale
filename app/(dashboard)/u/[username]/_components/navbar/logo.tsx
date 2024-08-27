'use client'
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import Link from "next/link";
const font = Poppins({
    subsets:["latin"],
    weight:['200','300','400','500','600','700','800']
});
export const Logo = () =>{
    return (
        <Link href="/">
            <div className="flex items-center gap-x-1 hover:opacity-85 transition">
                <motion.div 
                    className="rounded-full p-1"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <Image src='/LaughTale.png' alt='laughtale' height='52' width='52' />
                </motion.div>
                <div className={cn('hidden lg:block',font.className)}>
                    <p className="text-lg font-semibold">LaughTale</p>
                    <p className="text-xs text-muted-foreground">Creator DashBoard</p>
                </div>
            </div>
        </Link>
    )
}