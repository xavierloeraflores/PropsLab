/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// 157 76.7% 48.8

import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { set } from "zod";

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
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 }, // Manila, Philippines
    { location: [19.076, 72.8777], size: 0.1 }, // Mumbai, India
    { location: [23.8103, 90.4125], size: 0.05 }, // Dhaka, Bangladesh
    { location: [30.0444, 31.2357], size: 0.07 }, // Cairo, Egypt
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing, China
    { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo, Brazil
    { location: [19.4326, -99.1332], size: 0.1 }, // Mexico City, Mexico
    { location: [40.7128, -74.006], size: 0.1 }, // New York City, USA
    { location: [34.6937, 135.5022], size: 0.05 }, // Osaka, Japan
    { location: [41.0082, 28.9784], size: 0.06 }, // Istanbul, Turkey
    { location: [35.6895, 139.6917], size: 0.1 }, // Tokyo, Japan
    { location: [37.7749, -122.4194], size: 0.07 }, // San Francisco, USA
    { location: [51.5074, -0.1278], size: 0.08 }, // London, UK
    { location: [55.7558, 37.6173], size: 0.08 }, // Moscow, Russia
    { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney, Australia
    { location: [48.8566, 2.3522], size: 0.07 }, // Paris, France
    { location: [-34.6037, -58.3816], size: 0.07 }, // Buenos Aires, Argentina
    { location: [13.7563, 100.5018], size: 0.06 }, // Bangkok, Thailand
    { location: [1.3521, 103.8198], size: 0.06 }, // Singapore, Singapore
    { location: [6.5244, 3.3792], size: 0.07 }, // Lagos, Nigeria
    { location: [-1.2921, 36.8219], size: 0.05 }, // Nairobi, Kenya
    { location: [33.6844, 73.0479], size: 0.05 }, // Islamabad, Pakistan
    { location: [35.6762, 139.6503], size: 0.09 }, // Yokohama, Japan
    { location: [3.139, 101.6869], size: 0.06 }, // Kuala Lumpur, Malaysia
    { location: [40.7306, -73.9352], size: 0.08 }, // New York City (Brooklyn), USA
    { location: [-22.9068, -43.1729], size: 0.06 }, // Rio de Janeiro, Brazil
    { location: [31.2304, 121.4737], size: 0.1 }, // Shanghai, China
    { location: [12.9716, 77.5946], size: 0.07 }, // Bengaluru, India
    { location: [25.276987, 55.296249], size: 0.05 }, // Dubai, UAE
    { location: [45.4642, 9.19], size: 0.06 }, // Milan, Italy
    { location: [34.0522, -118.2437], size: 0.1 }, // Los Angeles, USA
    { location: [29.7604, -95.3698], size: 0.08 }, // Houston, USA
    { location: [41.8781, -87.6298], size: 0.08 }, // Chicago, USA
    { location: [25.7617, -80.1918], size: 0.07 }, // Miami, USA
    { location: [45.5017, -73.5673], size: 0.06 }, // Montreal, Canada
    { location: [49.2827, -123.1207], size: 0.05 }, // Vancouver, Canada
    { location: [32.7157, -117.1611], size: 0.05 }, // San Diego, USA
    { location: [33.4484, -112.074], size: 0.05 }, // Phoenix, USA
    { location: [39.9526, -75.1652], size: 0.06 }, // Philadelphia, USA
    { location: [20.6597, -103.3496], size: 0.07 }, // Guadalajara, Mexico
    { location: [-12.0464, -77.0428], size: 0.07 }, // Lima, Peru
    { location: [-22.9068, -43.1729], size: 0.08 }, // Rio de Janeiro, Brazil
    { location: [-4.4419, -79.2335], size: 0.05 }, // Guayaquil, Ecuador
    { location: [-33.4489, -70.6693], size: 0.07 }, // Santiago, Chile
    { location: [-16.5, -68.15], size: 0.05 }, // La Paz, Bolivia
    { location: [-0.1807, -78.4678], size: 0.06 }, // Quito, Ecuador
    { location: [12.9716, 77.5946], size: 0.05 }, // Addis Ababa, Ethiopia
    { location: [36.8219, 1.2921], size: 0.06 }, // Nairobi, Kenya
    { location: [15.3875, 38.2519], size: 0.04 }, // Khartoum, Sudan
    { location: [-26.2041, 28.0473], size: 0.06 }, // Johannesburg, South Africa
    { location: [9.0579, 7.49508], size: 0.05 }, // Abuja, Nigeria
  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  // const [phi, setPhi] = useState(0);
  let width = 0;
  // const [width, setWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<null | number>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: null | number) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      // if (!pointerInteracting.current) setPhi(phi + 0.005);
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r, phi, width],
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
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
