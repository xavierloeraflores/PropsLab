import { Hero } from "~/components/hero";
import { FeatureSectionCollection } from "~/components/feature-section/feature-section-collection";
import { FeatureSectionCollectionData } from "~/data/features";
import SportsSquareCollection from "~/components/sports-squares/sports-square-collection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SportsSquareCollection />
      <FeatureSectionCollection {...FeatureSectionCollectionData} />
    </>
  );
}
