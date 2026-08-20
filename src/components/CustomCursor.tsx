"use client";

import { motion, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      const target = event.target as HTMLElement;

      setIsHovering(
        !!target.closest("a, button, input, textarea, [role='button']"),
      );
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY }}
      animate={{
        scale: isClicking ? 0.65 : isHovering ? 1.8 : 1,
      }}
      transition={{
        duration: 0.15,
        ease: "easeOut",
      }}
      className="pointer-events-none fixed left-0 top-0 z-9999 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
    />
  );
}