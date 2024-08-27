import { create } from "zustand";
interface DashboardSidebar {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useDashboardSidebar = create<DashboardSidebar>((set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed:false })),
  onCollapse:() => set(() => ({ collapsed:true })),
}));
