export const formatTime = (
  time: number
): { minutes: number; seconds: number } => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return { minutes, seconds };
};
