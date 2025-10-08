import { Info } from "lucide-react";
import IconButton from "../ui/IconButton";

const Footer = () => {
  return (
    <footer className="flex justify-end p-5">
      <IconButton icon={<Info strokeWidth={1.25} width={28} height={28} />} />
    </footer>
  );
};

export default Footer;
