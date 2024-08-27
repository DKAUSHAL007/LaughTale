"use client";
import { toast } from "sonner";
import { startTransition, useTransition } from "react";
import { MinusCircle } from "lucide-react";

import { Hint } from "../hint";
import { onBlock } from "@/actions/block";

import { cn, stringToColor } from "@/lib/utils";
import { Button } from "../ui/button";

interface CommunityItemsProps {
  hostName: string;
  viewerName: string;
  participantName?: string;
  participantIdentity: string;
}

export const CommunityItem = ({
  hostName,
  viewerName,
  participantName,
  participantIdentity,
}: CommunityItemsProps) => {
  const [isPending, startTransition] = useTransition();

  const color = stringToColor(participantName ?? "");
  const isSelf = participantName === viewerName;
  const isHost = viewerName === hostName;

  const handleBlock = () => {
    if (!participantName || isSelf || !isHost) {
      return;
    }
    startTransition(() => {
      onBlock(participantIdentity)
        .then(() => toast.success(`Blocked ${participantName}`))
        .catch(() => toast.error("something went wrong"));
    });
  };
  return (
    <div
      className={cn(
        "group flex items-center justify-between w-full p-2 rounded-md text-sm hover:bg-white/5",
        isPending && 'opacity-50 pointer-events-none'
      )}>
      <p style={{ color: color }}>{participantName}</p>
      {isHost && !isSelf && (
        <Hint side="left" label="Block">
          <Button
            disabled={isPending}
            onClick={handleBlock}
            variant='ghost'
            className="h-auto w-auto p-1 opacity-0 group-hover:opacity-100 transition">
            <MinusCircle className="h-4 w-4 text-muted-foreground" />
          </Button>
        </Hint>
      )}
    </div>
  );
};
