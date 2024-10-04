"use client";
import Image from "next/image";
const LogoLightSrc = "/static/images/icon/xl1024/white_mini.png";
const LogoDarkSrc = "/static/images/icon/xl1024/black_mini.png";

type PropsLabLogoProps = {
  size?: number;
};
export function PropsLabLogo({ size = 64 }: PropsLabLogoProps) {
  const isDarkTheme = true;
  return (
    <Image
      src={isDarkTheme ? LogoDarkSrc : LogoLightSrc}
      width={size}
      height={size}
      alt="Props Lab Logo"
    />
  );
}
