const radius = 122;
const stroke = 11.25;
const diameter = radius * 2 + stroke;

export const PROGRESS_CIRCLE_DIMENSIONS = {
  radius,
  stroke,
  diameter,
} as const;
