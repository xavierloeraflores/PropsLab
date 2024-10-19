import { SectionContainer } from "~/components/framer-container";
import { TextGenerateRaw } from "~/components/ui/text-generation-raw";
import { WhyJoin } from "./why-join";
import Link from "next/link";
export default function JoinPage() {
  return (
    <SectionContainer>
      <div className="container flex flex-col px-4 md:px-6">
        <div className="mb-8 flex flex-col items-center justify-center space-y-4 text-center lg:mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <TextGenerateRaw
                words="Join Today!"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              />
            </h2>
            <p className="max-w-[700px] text-primary-foreground md:text-lg/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              Engage non-stop! Join our vibrant community, active day and night,
              for lively conversations and shared excitement!
            </p>
            <Link
              href="https://whop.com/marketplace/props-lab/"
              className="inline-flex h-16 max-w-[600px] items-center justify-center rounded-md bg-primary/80 px-8 text-xl font-bold text-primary-foreground underline-offset-4 shadow-sm shadow-primary/50 transition-shadow duration-300 hover:bg-primary/80 hover:shadow-lg hover:shadow-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
              target="_blank"
            >
              Join Now
            </Link>
          </div>
        </div>
        <WhyJoin />
        {/* JOIN */}
      </div>
    </SectionContainer>
  );
}
