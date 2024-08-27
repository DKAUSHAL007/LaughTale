"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import { Logo } from "./_components/logo";
import { motion } from "framer-motion";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black dark:bg-grid-white/[0.09] bg-grid-black/[0.2] h-full flex flex-row-reverse items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Logo />
        {children}
      </div>
      <motion.div
        className="w-full h-full hidden lg:flex flex-col items-center justify-center"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}>
        <div className="h-full w-full flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-7xl h-[230.8px] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-rose-50 to-indigo-950 bg-opacity-100">
              LaughTale for Streaming and Enterainment.
            </h1>
            <h3 className="mt-4 font-bold text-lg text-neutral-300 max-w-lg text-left mx-auto">
              Welcome to Laughtale!!<br />
              Dive into endless entertainment! Stream, connect, and enjoy live content. Log in to start your adventure.
            </h3>
          </div>
        </div>  
      </motion.div>
    </div>
  );
};

export default AuthLayout;
