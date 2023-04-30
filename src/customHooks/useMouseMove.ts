import { useState, useEffect, RefObject } from "react";

interface MousePosition {
  mouseX: number;
  mouseY: number;
}

export const useMouseMove = (elementRef: RefObject<HTMLElement>): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    mouseX: 0,
    mouseY: 0
  });

  const handleMouseMove = (event: MouseEvent): void => {
    const { clientX, clientY } = event;
    setMousePosition({ mouseX: clientX, mouseY: clientY });
  };

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [elementRef]);

  return mousePosition;
};
