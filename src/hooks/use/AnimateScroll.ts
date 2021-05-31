import { useState, useEffect, RefObject } from "react";

// const useScrollPartialVisibility = (ref: RefObject<HTMLElement>) => {
//   const [state, setState] = useState<DOMRect>();
//   const [isVisibility, setVisibility] = useState(false);

//   const listener = () => {
//     window.requestAnimationFrame(() => {
//       setState(ref.current!.getBoundingClientRect());
//     });
//   };

//   const isPartialVisibity = () => {
//     return (
//       state && state.top + state.height >= 0 && state.height + window.innerHeight >= state.bottom
//     );
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", listener, true);

//     const cleanUp = () => {
//       window.removeEventListener("scroll", listener, true);
//     };

//     if (isPartialVisibity()) {
//       setVisibility(true);
//       cleanUp();
//     }

//     return cleanUp;
//   }, [state]);

//   return isVisibility;
// };

const useAnimateScroll = () => {
  const isPartialVisibity = (el: DOMRect) => {
    return el && el.top + el.height >= 0 && el.height + window.innerHeight >= el.bottom;
  };

  useEffect(() => {
    let animItems = Array.from(document.querySelectorAll("[data-animation]"));

    const listener = () => {
      window.requestAnimationFrame(() => {
        if (!animItems.length) {
          cleanUp();
        }
        animItems.forEach((item, idx, arr) => {
          const elBoundary = item.getBoundingClientRect();
          if (isPartialVisibity(elBoundary)) {
            const activeAnimClass = item.getAttribute("data-active-anim-class");
            item.classList.add(activeAnimClass!);
            arr.splice(idx, 1);
          }
        });
      });
    };

    window.addEventListener("scroll", listener, true);

    const cleanUp = () => {
      return window.removeEventListener("scroll", listener, true);
    };

    return cleanUp;
  });
};

export default useAnimateScroll;
