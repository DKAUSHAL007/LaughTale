"use client";
import { useViewerToken } from "@/hooks/use-viewer-token";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { cn } from "@/lib/utils";
import { Stream, User } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";
import { Video, VideoSkeleton } from "./video";
import { Chat, ChatSkeleton } from "./chat";
import { ChatToggle } from "./chat-toggle";
import { Header, HeaderSkeleton } from "./header";
import { InfoCard } from "./info-card";
import { AboutCard } from "./about-card";

interface StreamPlayerProps {
  user: User & { stream: Stream | null,_count:{followedBy:number} };
  stream: Stream;
  isFollowing: boolean;
}

export const StreamPlayer = ({
  user,
  stream,
  isFollowing,
}: StreamPlayerProps) => {
  const { token, name, identity } = useViewerToken(user.id);

  const { collapsed } = useChatSidebar();

  if (!token || !name || !identity) {
    return <StreamPlayerSkeleton />;
  }
  return (
    <>
      {collapsed && (
        <div className="hidden lg:block fixed top-[100px] right-2 z-50">
          <ChatToggle />
        </div>
      )}
      <LiveKitRoom
        className={cn(
          "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 h-full",
          collapsed && "grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
        )}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}>
        <div className="space-y-3 cols-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-6 lg:overflow-y-auto hidden-scrollbar pb-10 transitio-all">
          <Video hostname={user.username} hostIdentity={user.id} />
          <Header 
            hostName={user.username}
            hostIdentity={user.id}
            viewerIdentity={identity}
            imageUrl = {user.imageUrl}
            isFollowing = {isFollowing}
            name = {stream.name} 
          />
          <InfoCard 
            hostIdentity={user.id}
            viewerIdentity={identity}
            name = {stream.name}
            thumbnailUrl = {stream.thumbnailUrl}
          />
          <AboutCard 
            hostName={user.username}
            hostIdentity={user.id}
            viewerIdentity={identity}
            bio={user.bio}
            followedByCount={user._count.followedBy}
          />
        </div>
        <div className={cn("col-span-2", collapsed && "hidden transtion-all")}>
          <Chat
            viewerName={name}
            hostName={user.username}
            hostIdentity={user.id}
            isFollowing={isFollowing}
            isChatEnabled={stream.isChatEnabled}
            isChatDelayed={stream.isChatDelayed}
            isChatFollowersOnly={stream.isChatFollowersOnly}
          />
        </div>
      </LiveKitRoom>
    </>
  );
};
export const StreamPlayerSkeleton = () =>{
  return(
    <div className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 h-full">
      <div className="space-y-4 cols-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-6 lg:overflow-y-auto hidden-scrollbar pb-10">
        <VideoSkeleton />
        <HeaderSkeleton />
      </div>
        <div className="col-span-2 bg-background">
          <ChatSkeleton />
        </div>
    </div>
  )
}