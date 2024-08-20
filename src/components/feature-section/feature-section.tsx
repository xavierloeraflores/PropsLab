import { cn } from "~/lib/utils";
import {
  FeatureSectionDescription,
  type FeatureSectionDescriptionProps,
} from "./feature-section-decription";
import {
  FeatureSectionVisual,
  type FeatureSectionVisualProps,
} from "./feature-section-visual";

type FeatureSectionProps = {
  description: FeatureSectionDescriptionProps;
  visual: FeatureSectionVisualProps;
  reverse?: boolean;
};

export function FeatureSection({
  description,
  visual,
  reverse = false,
  className = "",
}: FeatureSectionProps & { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 bg-black p-6 text-white",
        reverse ? "flex-row-reverse" : "flex-row",
        className,
      )}
    >
      <FeatureSectionVisual {...visual} className="flex-1" />
      <FeatureSectionDescription {...description} />
    </div>
  );
}
