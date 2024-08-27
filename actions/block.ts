"use server";

import { getSelf } from "@/lib/auth-service";
import { blockUser, unblockUser } from "@/lib/block-service";
import { RoomServiceClient } from "livekit-server-sdk";
import { revalidatePath } from "next/cache";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export const onBlock = async (id: string) => {
  //TODO:adapt to disconnect from livestream
  //TODO:allow ability to kick the guest
  const self = await getSelf();
  let blockedUser;
  try {
    blockedUser = await blockUser(id);
  } catch {
    //this means user is a guest

  }
  try{
    await roomService.removeParticipant(self.id,id) 
    //remove participant accepts two args one is a room id from which we want to kick someone and other is the id of the gues/person we want to remove
  }catch{
    //This means user is not in the room

  }
  revalidatePath(`/u/${self.username}/community`);
  return blockedUser;
};
export const onUnBlock = async (id: string) => {
  const unblockedUser = await unblockUser(id);
  revalidatePath("/");
  if (unblockedUser) {
    revalidatePath(`/${unblockedUser.blocked.username}`);
  }
  return unblockedUser;
};
