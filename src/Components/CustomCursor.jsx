import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHovered(isHoveringInteractiveElement(e.target));
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const isHoveringInteractiveElement = (target) => {
      if (!target) return false;
      const interactiveTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"];
      if (interactiveTags.includes(target.tagName)) return true;
      if (target.getAttribute("role") === "button") return true;
      return false;
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <>
      <div
        className={`custom-cursor smooth-transition pointer-events-none fixed z-50 rounded-full border border-primary bg-transparent transform -translate-x-1/2 -translate-y-1/2 ${
          visible ? "opacity-100" : "opacity-0"
        } ${clicked ? "scale-75 bg-primary border-primary" : hovered ? "scale-110 border-accent" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "24px",
          height: "24px",
          transition: "transform 0.15s ease, background-color 0.25s ease, border-color 0.25s ease, opacity 0.3s ease",
          willChange: "transform, opacity",
        }}
      />
    </>
  );
};

export default CustomCursor;
