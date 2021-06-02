import { useEffect } from "react";

const useAnimateScroll = () => {
  const isPartialVisibility = (el: DOMRect) => {
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
          if (isPartialVisibility(elBoundary)) {
            const activeAnimClass = item.getAttribute("data-animation");
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
