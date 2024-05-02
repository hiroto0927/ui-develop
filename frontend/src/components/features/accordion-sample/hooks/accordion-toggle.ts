/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";

export default function useAccordionToggle() {
  const [toggle, setToggle] = useState(false);

  const changeToggle = useCallback(() => setToggle((toggle) => !toggle), []);

  return { toggle, changeToggle };
}
