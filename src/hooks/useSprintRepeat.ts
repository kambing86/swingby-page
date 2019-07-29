import { useCallback, useState } from "react";
import { useSpring } from "react-spring";

export const slowConfig = { mass: 1, tension: 0.5, friction: 1 };

export default (option: any) => {
  const [reverse, setReverse] = useState(false);
  const onRestHandler = useCallback(() => {
    setReverse(val => !val);
    if (option.onRest) option.onRest();
  }, [option]);
  return useSpring({ ...option, reverse, onRest: onRestHandler });
};
