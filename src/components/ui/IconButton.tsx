import { JSX } from "react";

const IconButton = ({
  icon,
  onClick,
}: {
  icon: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-neutral-800 hover:cursor-pointer hover:text-neutral-500 transition-colors duration-200"
    >
      {icon}
    </button>
  );
};

export default IconButton;
