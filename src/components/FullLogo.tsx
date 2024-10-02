"use client";
import Image from "next/image";
// Black & White Logos are swapped to contrast backgrounds
// Aspect Ratio: ~3.3:1
const LogoLightSrc = "/static/images/logo/logo_black.png";
const LogoDarkSrc = "/static/images/logo/logo_white.png";

type PropsLabLogoProps = {
    size?:number
}
export function FullLogo({size=64}:PropsLabLogoProps) {
    const isDarkTheme = true;
    return (<Image src={isDarkTheme ? LogoDarkSrc : LogoLightSrc} width={size*3.3} height={size} alt="Props Lab Logo"/>)}
