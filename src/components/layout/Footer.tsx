import { Info } from "lucide-react";
import IconButton from "../ui/IconButton";

const Footer = () => {
  return (
    <footer className="flex justify-end p-5">
      <IconButton
        icon={
          <Info
            className="text-neutral-800 hover:cursor-pointer hover:shadow-md transition-shadow duration-200"
            strokeWidth={1.25}
            width={28}
            height={28}
          />
        }
      />
    </footer>
  );
};

export default Footer;
