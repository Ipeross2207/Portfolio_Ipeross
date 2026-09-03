"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  animate,
} from "motion/react";
import { useRef, useState } from "react";

export default function ProjectPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

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
      onComplete: () => {
        setShowVideo(true);

        videoRef.current?.play().catch(() => {});
      },
    });
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!containerRef.current || !isHovered) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateYValue =
      ((x - centerX) / centerX) * 6;

    const rotateXValue =
      ((y - centerY) / centerY) * -6;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    rotateZ.set(0);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowVideo(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

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
        {/* Botón lateral derecho */}
        <div className="absolute -right-[6px] top-20 h-14 w-[3px] rounded-r-full bg-slate-600" />

        {/* Botón lateral izquierdo */}
        <div className="absolute -left-[6px] top-24 h-8 w-[3px] rounded-l-full bg-slate-600" />

        {/* Pantalla */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] border border-slate-700 bg-[#0a0f1c]">
          {/* Dynamic Island / cámara */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />

          {/* Logo */}
          <motion.div
            initial={false}
            animate={{
              opacity: showVideo ? 0 : 1,
            }}
            transition={{
              duration: 0.25,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src="/projects/streamlytics/streamlytics.png"
              alt="Streamlytics"
              draggable={false}
              className="h-full w-full object-contain"
            />
          </motion.div>

          {/* Vídeo */}
          <motion.div
            initial={false}
            animate={{
              opacity: showVideo ? 1 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              src="/projects/streamlytics/streamlytics.mp4"
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}