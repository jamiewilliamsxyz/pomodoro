import { Info } from "lucide-react";
import IconButton from "../ui/IconButton";

const Footer = () => {
  return (
    <footer className="flex justify-end p-3">
      <IconButton
        icon={
          <Info
            className="text-neutral-800 hover:cursor-pointer hover:shadow-md transition-shadow duration-200"
            strokeWidth={1}
            width={30}
            height={30}
          />
        }
      />
    </footer>
  );
};

export default Footer;
