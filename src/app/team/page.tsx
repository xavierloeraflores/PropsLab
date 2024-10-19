import { SectionContainer } from "~/components/framer-container";
import { TeamCollection } from "~/components/team-section/team-collection";
import { TeamCollectionData } from "~/data/team";
import { TextGenerateRaw } from "~/components/ui/text-generation-raw";

export default function AboutTheTeam() {
  return (
    <SectionContainer>
      <div className="container flex flex-col px-4 md:px-6">
        <div className="mb-8 flex flex-col items-center justify-center space-y-4 text-center lg:mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <TextGenerateRaw
                words="Meet Our Team"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              />
            </h2>
            <p className="max-w-[700px] text-primary-foreground md:text-lg/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              We are a passionate team of visionaries, experts, and strategists
              dedicated to using data-driven approaches and rigorous statistical
              analysis to predict outcomes and make informed betting decisions.
            </p>
            {/* <p className="max-w-[700px] text-primary-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              We are a passionate team of visionaries, experts, and strategists
              dedicated to using data-driven approaches and rigorous statistical
              analysis to predict outcomes and make informed betting decisions.
              We take pride in our high hit rates, achieved through our team of
              experts who employ sophisticated models and statistical methods to
              ensure our predictions are as accurate as possible.
            </p> */}
          </div>
        </div>
        <TeamCollection {...TeamCollectionData} />
      </div>
    </SectionContainer>
  );
}
