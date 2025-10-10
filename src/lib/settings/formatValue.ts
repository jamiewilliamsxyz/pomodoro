import { OptionProps } from "@/types";

export const formatValue = ({
  value,
  label,
}: Pick<OptionProps, "value" | "label">) => {
  if (label === "rounds" || typeof value === "string") {
    return value;
  } else if (typeof value === "number") {
    return `${value}:00`;
  }
  return ""; // Fallback for undefined so React can render safely
  // Refactor and add more formats when implementing the other settings
};
