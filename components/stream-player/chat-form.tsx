"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChatInfo } from "./chat-info";

interface ChatFormProps {
  onSubmit: () => void;
  value: string;
  onChange: (value: string) => void;
  isHidden: boolean;
  isChatFollowersOnly: boolean;
  isFollowing: boolean;
  isChatDelayed: boolean;
}

export const ChatForm = ({
  onSubmit,
  value,
  onChange,
  isHidden,
  isChatFollowersOnly,
  isFollowing,
  isChatDelayed,
}: ChatFormProps) => {
  const [isDelayedBlocked, setIsDelayedBlocked] = useState(false);
  const isFollowersOnlyAndNotFollowing = isChatFollowersOnly && !isFollowing;
  const isDisabled =
    isHidden || isDelayedBlocked || isFollowersOnlyAndNotFollowing;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!value || isDisabled) return;

    if (isChatDelayed && !isDelayedBlocked) {
      setIsDelayedBlocked(true);
      setTimeout(() => {
        setIsDelayedBlocked(false);
        onSubmit();
      }, 3000);
    } else {
      onSubmit();
    }
  };
  if(isHidden){
    return null
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-4 p-3">
      <div className="w-full">
        <ChatInfo isDelayed={isChatDelayed} isFollowersOnly={isChatFollowersOnly} />
        <Input
          onChange={(e) => {onChange(e.target.value)}}
          value={value}
          disabled={isDisabled}
          placeholder="Send a Message"
          className={cn(
            "border-white/10",
            isChatFollowersOnly && "rounded-t-none border-t-0"
          )}
        />
      </div>
      <div className="ml-auto">
        <Button type="submit" disabled={isDisabled} variant="primary" size="sm">
          Chat
        </Button>
      </div>
    </form>
  );
};

export const ChatFormSkeleton = () =>{
    return(
        <div className="flex flex-col items-center gap-y-4 p-3">
            <Skeleton className="bg-gray-700 w-full h-10" />
            <div className="flex items-center gap-x-2 ml-auto">
            <Skeleton className="bg-dot-gray-700 w-7 h-7" />
            <Skeleton className="bg-gray-700 w-12 h-7" />

            </div>
        </div>
    )
}