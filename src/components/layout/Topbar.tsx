import { EyeClosed, PictureInPicture2, Settings } from "lucide-react";
import IconButton from "../ui/IconButton";

const Topbar = () => {
  return (
    <nav className="flex justify-between py-5 px-5">
      <div className="flex gap-5">
        <IconButton
          icon={<PictureInPicture2 width={28} height={28} strokeWidth={1.25} />}
        />
        <IconButton
          icon={<EyeClosed width={28} height={28} strokeWidth={1.25} />}
        />
      </div>
      <IconButton
        icon={<Settings width={28} height={28} strokeWidth={1.25} />}
      />
    </nav>
  );
};

export default Topbar;
