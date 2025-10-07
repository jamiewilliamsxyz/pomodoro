import { JSX } from "react";

const IconButton = ({ icon }: { icon: JSX.Element }) => {
  return (
    <button className="text-neutral-800 hover:cursor-pointer hover:text-neutral-500 transition-colors duration-200">
      {icon}
    </button>
  );
};

export default IconButton;
