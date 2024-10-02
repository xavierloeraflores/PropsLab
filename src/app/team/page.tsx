"use client";
import { SectionContainer } from "~/components/framer-container";
import { TeamCollection } from "~/components/team-section/team-collection";
import { TeamCollectionData } from "~/data/team";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { env } from "~/env";

const teamPageFlag = env.NEXT_PUBLIC_TEAM_PAGE;
export default function AboutTheTeam() {
  const router = useRouter();
  useEffect(() => {
    if (!teamPageFlag) router.push("/");
  }, [router]);

  return (
    <SectionContainer>
      <div className="container flex flex-col px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a passionate team of visionaries, experts, and strategists
              dedicated to using data-driven approaches and rigorous statistical
              analysis to predict outcomes and make informed betting decisions.
              We take pride in our high hit rates, achieved through our team of
              experts who employ sophisticated models and statistical methods to
              ensure our predictions are as accurate as possible.
            </p>
          </div>
        </div>
        <TeamCollection {...TeamCollectionData} />
      </div>
    </SectionContainer>
  );
}
