"use client";
import React from "react";
import dynamic from "next/dynamic";
// https://ui.aceternity.com/components/github-globe

const World = dynamic(() => import("./acernity-globe").then((m) => m.World), {
  ssr: false,
});

const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: "#06b6d4",
  },
];

export function WorldGlobe() {
  const globeConfig = {
    // pointSize: 4,
    pointSize: 1,
    // globeColor: "#062056",
    globeColor: "#030306",
    showAtmosphere: true,
    // atmosphereColor: "#FFFFFF",
    // atmosphereColor: [28 / 255, 217 / 255, 144 / 255],
    // atmosphereColor: "#1CD990",
    atmosphereColor: "#21ffaa",
    atmosphereAltitude: 0.2,
    // atmosphereAltitude: 0.1,
    // emissive: "#062056",
    emissive: "#000000",
    emissiveIntensity: 0,
    shininess: 0.99,
    // shininess: 0.9,
    polygonColor: "rgba(255,255,255,1)",
    // polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#1CD990",
    // ambientLight: "#38cdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.85,
  };
  return (
    <div className="relative aspect-square h-full w-full">
      <World data={[]} globeConfig={globeConfig} />
    </div>
  );
}
