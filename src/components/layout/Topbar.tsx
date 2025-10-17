import { Settings, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/icons/logo.svg";
import OpenModalButton from "../ui/OpenModalButton";

const Topbar = () => {
  return (
    <div className="px-6 pt-6">
      <nav className="w-full max-w-[33.5rem] mx-auto px-5 py-3 flex justify-between rounded-full shadow-sm dark:bg-[#1a1a1a] dark:shadow-md">
        <div className="flex gap-3 items-center">
          <Link href="/">
            <Image src={logo.src} width={26} height={26} alt="Pomodoro logo" />
          </Link>

          <h1 className="text-lg font-medium text-base-200 tracking-normal">
            Pomodoro
          </h1>
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
    </div>
  );
};

export default Topbar;
