import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "./framer-container";
import Globe from "./ui/globe";

export function Hero() {
  return (
    <SectionContainer>
      <div className="container flex flex-col-reverse gap-10 px-4 md:flex-row md:gap-6 md:px-6">
        <div className="flex flex-1 flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Bet <span className="text-primary">Smarter,{"  "}</span>
              <br className="hidden sm:block" />
              Not <span className="text-primary">Harder</span>
              <span className="text-primary">.</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              We are a community of sports and betting enthusiasts who use
              cutting-edge technology to predict outcomes and provide valuable
              insights into the world of sports betting.
            </p>
          </div>
          <Link
            href="/join"
            className="text-md inline-flex h-10 max-w-[600px] items-center justify-center rounded-md bg-primary px-8 font-bold text-primary-foreground shadow-md shadow-primary/80 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Join Now
          </Link>
        </div>
        <div className="mx-auto w-full flex-1">
          {/* 900 x 650 */}
          <Globe className="relative" />
        </div>
      </div>
    </SectionContainer>
  );
}
