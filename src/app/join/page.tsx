/* eslint-disable @next/next/no-img-element */
import { SectionContainer } from "~/components/framer-container";
import { TextGenerateRaw } from "~/components/ui/text-generation-raw";
import { WhyJoin } from "./why-join";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export default function JoinPage() {
  return (
    <SectionContainer>
      <div className="container flex flex-col px-4 md:px-6">
        <div className="mb-8 flex flex-col items-center justify-center space-y-4 text-center lg:mb-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <TextGenerateRaw
                words="Join Premium Discord"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              />
            </h2>
            <p className="max-w-[700px] text-primary-foreground/90 md:text-lg/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              Unlock <strong>Premium Daily Picks</strong> across a variety of
              sports, curated by expert analysts or get started for free by
              joining our Discord.
            </p>
            <Link
              href="https://whop.com/marketplace/props-lab/"
              className="inline-flex h-16 max-w-[600px] items-center justify-center rounded-md bg-orange-400 px-8 text-xl font-bold text-primary-foreground underline-offset-4 shadow-sm shadow-primary/50 transition-shadow duration-300 hover:bg-orange-400/90 hover:shadow-lg hover:shadow-orange-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
              target="_blank"
            >
              <img
                src="/static/images/other/whop.svg"
                alt="Whop logo"
                className="mx-4 h-12 w-12"
              />
              Unlock Premium Picks Now
            </Link>
            <br />
            <Link
              href="https://discord.com/invite/propslab"
              className="mt-8 block inline-flex h-16 max-w-[600px] items-center justify-center rounded-md bg-purple-700 px-8 text-xl font-bold text-primary-foreground underline-offset-4 shadow-sm shadow-primary/50 transition-shadow duration-300 hover:bg-purple-700/80 hover:shadow-lg hover:shadow-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
              target="_blank"
            >
              <FaDiscord className="mx-4 h-12 w-12" />
              Join Free Discord
            </Link>
          </div>
        </div>
        <WhyJoin />
        {/* JOIN */}
      </div>
    </SectionContainer>
  );
}
