import { EyeClosed, PictureInPicture2, Settings } from "lucide-react";
import IconButton from "../ui/IconButton";

const Topbar = ({ toggleSettings }: { toggleSettings: () => void }) => {
  return (
    <nav className="p-5">
      <div className="max-w-[95rem] mx-auto flex justify-between items-center">
        <div className="flex gap-5">
          <IconButton
            icon={
              <PictureInPicture2 width={28} height={28} strokeWidth={1.25} />
            }
          />
          <IconButton
            icon={<EyeClosed width={28} height={28} strokeWidth={1.25} />}
          />
        </div>
        <IconButton
          onClick={toggleSettings}
          icon={<Settings width={28} height={28} strokeWidth={1.25} />}
        />
      </div>
    </nav>
  );
};

export default Topbar;
