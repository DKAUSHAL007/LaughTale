'use client'
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
const font = Poppins({
    subsets:["latin"],
    weight:['200','300','400','500','600','700','800']
});
export const Logo = () =>{
    return (
        <div className="flex items-center gap-x-4">
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
                <Image src='/LaughTale.png' alt='Laugh Tale' width='80' height='80' />
            </motion.div>
            <div className={cn("flex flex-col items-center",font.className)}>
                <motion.p 
                    className='text-xl font-semibold'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: 2 / 10,
                    }}
                >
                    Laugh Tale
                </motion.p>
                <motion.p 
                    className='text-sm text-mutated-foreground'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: 1 / 10,
                    }}
                >
                    Happy Watching!
                </motion.p>
            </div>
        </div>
    )
}