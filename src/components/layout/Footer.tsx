import { Info } from "lucide-react";
import OpenModalButton from "../ui/OpenModalButton";

const Footer = () => {
  return (
    <footer className="p-5">
      <div className="max-w-[95rem] mx-auto flex justify-end">
        <OpenModalButton
          modal="info"
          icon={<Info strokeWidth={1.25} width={28} height={28} />}
        />
      </div>
    </footer>
  );
};

export default Footer;
