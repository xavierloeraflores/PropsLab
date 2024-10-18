"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
// 157 76.7% 48.8

import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef, useState } from "react";
import { markers } from "./markers";

import { cn } from "~/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {
    console.log("Welcome to Props Lab");
  },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1.1,
  diffuse: 0,
  mapSamples: 8000, //Number of Dots
  mapBrightness: 1.5,
  baseColor: [1, 1, 1],
  markerColor: [28 / 255, 217 / 255, 144 / 255],
  glowColor: [28 / 255, 217 / 255, 144 / 255],
  markers: markers,
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onRender = (state: Record<string, any>) => {
      if (onScreen) {
        phi += 0.005;
        state.phi = phi;
        state.width = width * 2;
        state.height = width * 2;
      }
    };

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });
    const handleScroll = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.bottom <= 0) {
          if (onScreen) {
            // console.log("Pausing Globe");
            setOnScreen(false);
            globe.toggle(false);
          }
        } else {
          if (!onScreen) {
            // console.log("Resuming Globe");
            setOnScreen(true);
            globe.toggle(true);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => {
      // console.log("Destroying Globe & Removing Event Listener");
      window.removeEventListener("scroll", handleScroll);
      globe.destroy();
    };
  }, [config, onScreen]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
      />
    </div>
  );
}
