"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
// 157 76.7% 48.8

import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
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
  let phi = 0;
  let width = 0;
  // const [width, setWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onRender = useCallback(
    (state: Record<string, any>) => {
      phi += 0.005;
      // if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi;
      state.width = width * 2;
      state.height = width * 2;
    },
    [phi, width],
  );

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        // setWidth(canvasRef.current.offsetWidth);
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

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
    // }, [config, onRender, width, setWidth]);
  }, [config, onRender, width]);

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
