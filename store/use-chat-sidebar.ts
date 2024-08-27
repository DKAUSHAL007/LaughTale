import { create } from "zustand";
export enum ChatVariant{
  CHAT = 'CHAT',
  COMMUNITY = 'COMMUNITY',
}
interface ChatSidebarProps {
  collapsed: boolean;
  variant:ChatVariant;
  onExpand: () => void;
  onCollapse: () => void;
  onChangeVariant: (variant:ChatVariant) => void;
}

export const useChatSidebar = create<ChatSidebarProps>((set) => ({
  variant:ChatVariant.CHAT,
  onChangeVariant: (variant:ChatVariant) =>set(()=>({variant})),
  collapsed: false,
  onExpand: () => set(() => ({ collapsed:false })),
  onCollapse:() => set(() => ({ collapsed:true })),
}));
