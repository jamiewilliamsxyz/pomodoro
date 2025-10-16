import { OptionProps } from "@/types";

export const formatValue = ({
  value,
  id,
}: Pick<OptionProps, "value" | "id">) => {
  if (id === "roundsUntilLongBreak") {
    return value;
  } else if (id === "notificationVolume") {
    return `${value}%`;
  } else if (typeof value === "boolean") {
    if (value) {
      return "On";
    } else {
      return "Off";
    }
  } else if (id === "theme") {
    return (
      (value as string).charAt(0).toUpperCase() +
      (value as string).slice(1) +
      " "
    );
  } else if (typeof value === "number") {
    return `${value}:00`;
  }
  return ""; // Fallback for undefined so React can render safely
};
