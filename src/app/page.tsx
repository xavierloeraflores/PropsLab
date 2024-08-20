import { Hero } from "~/components/hero";
import { FeatureSectionCollection } from "~/components/feature-section/feature-section-collection";
import { FeatureSectionCollectionData } from "~/data/features";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureSectionCollection {...FeatureSectionCollectionData} />
    </>
  );
}
