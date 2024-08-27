"use client";
import { ArrowLeftFromLine, ArrowRightFromLine, MessageSquare, User } from "lucide-react";
import { Hint } from "@/components/hint";

import { Button } from "@/components/ui/button";
import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";

export const VariantToggle = () => {
  const { variant,onChangeVariant } = useChatSidebar((state) => state);
  const isChat = variant === ChatVariant.CHAT;
  const Icon = isChat ? User : MessageSquare;
  const onToggle = () => {
    const newVariant = isChat? ChatVariant.COMMUNITY :ChatVariant.CHAT;
    onChangeVariant(newVariant)
  };
  const label = isChat ? "Community" : "Go back to Chat";

  return (
    <Hint asChild label={label} side="left">
      <Button
        variant="ghost"
        onClick={onToggle}
        className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent">
            <Icon className="h-4 w-4" />
        </Button>
    </Hint>
  );
};
