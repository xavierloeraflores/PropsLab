import { cn } from "~/lib/utils";
import { FeatureSection, type FeatureSectionProps } from "./feature-section";

export type FeatureSectionCollectionProps = {
  collection: FeatureSectionProps[];
};

export function FeatureSectionCollection({
  collection,
  className = "",
}: FeatureSectionCollectionProps & { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-20", className)}>
      {collection.map((feature, index) => {
        return (
          <FeatureSection
            key={index}
            visual={feature.visual}
            description={feature.description}
            reverse={index % 2 == 0}
            className=""
          />
        );
      })}
    </div>
  );
}
