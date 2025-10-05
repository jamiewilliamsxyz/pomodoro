import { useState } from "react";

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [on, setOn] = useState(initialValue);
  const toggle = () => setOn((prev) => !prev);
  return [on, toggle];
};
