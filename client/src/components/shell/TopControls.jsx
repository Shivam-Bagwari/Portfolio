import { Command, Sun } from "lucide-react";
import IconButton from "../ui/IconButton";

function TopControls() {
  return (
    <div className="fixed top-6 right-8 z-50 flex items-center gap-3">
      <IconButton>
        <Command size={18} />
      </IconButton>

      <IconButton>
        <Sun size={18} />
      </IconButton>
    </div>
  );
}

export default TopControls;