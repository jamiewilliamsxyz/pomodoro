import { OptionProps } from "@/types";

export const formatValue = ({
  value,
  id,
}: Pick<OptionProps, "value" | "id">) => {
  if (id === "rounds") {
    return value;
  } else if (id === "notificationVolume") {
    return `${value}%`;
  } else if (id === "popupNotifications") {
    if (value) {
      return "On";
    } else {
      return "Off";
    }
  } else if (typeof value === "number") {
    return `${value}:00`;
  }
  return ""; // Fallback for undefined so React can render safely
};
