"use client";
// Subscribe to our premium VIP membership (more info in ⁠🔑︱how-to-buy ): https://whop.com/props-lab?pass=prod_KGA3kegSypPF6
// 📸 - Instagram: https://www.instagram.com/props_lab/
// 🐥 - Twitter: https://twitter.com/props_lab
// ⏱️ - Main Tik Tok: https://www.tiktok.com/@propslab
// 🥼 - Professor Props’ Tik Tok: https://www.tiktok.com/@professorprops

import { FullLogo } from "./FullLogo";
import { RainbowButton } from "./ui/rainbow-button";
import { FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import { Separator } from "./ui/separator";

export function Socials() {
  return (
    <div className="my-8 flex w-full flex-col items-center justify-center gap-8 p-4">
      <FullLogo />
      <div className="mb-8 flex w-full flex-row flex-wrap justify-center gap-4 py-4">
        <SocialButton link="https://twitter.com/props_lab" text="Twitter" />
        <SocialButton
          link="https://www.instagram.com/props_lab/"
          text="Instagram"
        />
        <SocialButton link="https://www.tiktok.com/@propslab" text="TikTok" />
      </div>

      <Separator orientation="horizontal" />
    </div>
  );
}

function SocialButton({ link, text }: { link: string; text: string }) {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <RainbowButton
      className="bg-black text-black"
      onClick={() => openLink(link)}
    >
      {text === "Twitter" && <FaTwitter className="mr-2" />}
      {text === "Instagram" && <FaInstagram className="mr-2" />}
      {text === "TikTok" && <FaTiktok className="mr-2" />}
      {" " + text}
    </RainbowButton>
  );
}
