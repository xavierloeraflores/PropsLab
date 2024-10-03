"use client";
import Image from "next/image";
const LogoLightSrc = "/static/images/icon/1024x1024/1024X1024_white_mini.png";
const LogoDarkSrc = "/static/images/icon/1024x1024/1024X1024_black_mini.png";

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
