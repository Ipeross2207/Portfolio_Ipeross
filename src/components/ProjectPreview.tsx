"use client";

import { motion, useMotionValue, useSpring, animate } from "motion/react";
import { useRef, useState } from "react";

export default function ProjectPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const baseRotationX = -10;
  const baseRotationY = -38;
  const baseRotationZ = 5;

  const rotateX = useMotionValue(baseRotationX);
  const rotateY = useMotionValue(baseRotationY);
  const rotateZ = useMotionValue(baseRotationZ);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 20,
    mass: 0.5,
  });

  const springZ = useSpring(rotateZ, {
    stiffness: 180,
    damping: 20,
    mass: 0.5,
  });

  const handleMouseEnter = () => {
    setIsHovered(true);

    animate(rotateX, 0, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    });

    animate(rotateY, 0, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    });

    animate(rotateZ, 0, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isHovered) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateYValue = ((x - centerX) / centerX) * 6;
    const rotateXValue = ((y - centerY) / centerY) * -6;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    rotateZ.set(0);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    animate(rotateX, baseRotationX, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    });

    animate(rotateY, baseRotationY, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    });

    animate(rotateZ, baseRotationZ, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex min-h-[460px] items-center justify-center"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          rotateZ: springZ,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[411px] w-[190px] rounded-[2.5rem] border border-slate-600 bg-[#111827] p-[6px] shadow-2xl shadow-cyan-950/30"
      >
        <div className="absolute -right-[6px] top-20 h-14 w-[3px] rounded-r-full bg-slate-600" />

        <div className="absolute -left-[6px] top-24 h-8 w-[3px] rounded-l-full bg-slate-600" />

        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] border border-slate-700 bg-[#0a0f1c]">
          <div className="absolute left-1/2 top-2 z-10 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />

          <div className="h-full w-full">
            <img
              src="/projects/streamlytics.jpg"
              alt="Streamlytics"
              draggable={false}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}