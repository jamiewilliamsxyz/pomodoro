import { Settings, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import OpenModalButton from "../ui/OpenModalButton";

const Topbar = () => {
  return (
    <nav className="mt-6 w-[34rem] px-5 py-3 mx-auto flex justify-between rounded-full shadow-sm">
      <div className="flex gap-3 items-center">
        <Link href="/">
          <Image
            src="/icons/logo.png"
            height={32}
            width={32}
            alt="Pomodoro logo"
            className="w-7 h-7"
          />
        </Link>

        <h1 className="text-lg">Pomodoro</h1>
      </div>

      <div className="flex gap-5 items-center">
        <OpenModalButton
          modal="settings"
          icon={<Settings width={26} height={26} strokeWidth={1.25} />}
        />
        <OpenModalButton
          modal="info"
          icon={<Info width={26} height={26} strokeWidth={1.25} />}
        />
      </div>
    </nav>
  );
};

export default Topbar;
