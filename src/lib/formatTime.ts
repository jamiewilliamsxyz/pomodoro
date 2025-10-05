import { FormatTimeReturn } from "@/types";

export const formatTime = (time: number): FormatTimeReturn => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return { minutes, seconds };
};
