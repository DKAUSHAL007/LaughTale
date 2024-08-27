import { Maximize, Minimize } from "lucide-react";
import { Hint } from "@/components/hint";
interface FullScreenControlProps {
  isFullScreen: boolean;
  onToggle: () => void;
}
export const FullScreenControl = ({
  isFullScreen,
  onToggle,
}: FullScreenControlProps) => {
  const Icon = isFullScreen ? Minimize : Maximize;
  const label = isFullScreen ? "Exit Full Screen" : "Enter Full Screen";
  return (
    <div className="flex items-center justify-center gap-4">
      <Hint asChild side="top" label={label}>
        <button
          onClick={onToggle}
          className="text-white rounded-lg p-1.5 hover:bg-white/10">
          <Icon className="h-5 w-5" />
        </button>
      </Hint>
    </div>
  );
};
