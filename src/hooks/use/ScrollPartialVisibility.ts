import { useState, useEffect, RefObject } from "react";

const useScrollPartialVisibility = (ref: RefObject<HTMLElement>) => {
  const [state, setState] = useState<DOMRect>();
  const [isVisibility, setVisibility] = useState(false);

  const listener = () => {
    window.requestAnimationFrame(() => {
      setState(ref.current!.getBoundingClientRect());
    });
  };

  const isPartialVisibity = () => {
    return (
      state && state.top + state.height >= 0 && state.height + window.innerHeight >= state.bottom
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", listener, true);

    const cleanUp = () => {
      window.removeEventListener("scroll", listener, true);
    };

    if (isPartialVisibity()) {
      setVisibility(true);
      cleanUp();
    }

    return cleanUp;
  }, [state]);

  return isVisibility;
};

export default useScrollPartialVisibility;
