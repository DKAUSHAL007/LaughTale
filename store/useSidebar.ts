import { create } from "zustand";
interface sideBarStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useSidebar = create<sideBarStore>((set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed:false })),
  onCollapse:() => set(() => ({ collapsed:true })),
}));
