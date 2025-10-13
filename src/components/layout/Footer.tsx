import { Info } from "lucide-react";
import IconButton from "../ui/IconButton";

const Footer = () => {
  return (
    <footer className="p-5">
      <div className="max-w-[95rem] mx-auto flex justify-end">
        <IconButton icon={<Info strokeWidth={1.25} width={28} height={28} />} />
      </div>
    </footer>
  );
};

export default Footer;
