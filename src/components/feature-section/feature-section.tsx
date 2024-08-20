import { cn } from "~/lib/utils";
import {
  FeatureSectionDescription,
  type FeatureSectionDescriptionProps,
} from "./feature-section-description";
import {
  FeatureSectionVisual,
  type FeatureSectionVisualProps,
} from "./feature-section-visual";

export type FeatureSectionProps = {
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
        "flex flex-col gap-6 p-6 text-white",
        reverse ? "sm:flex-row-reverse" : "sm:flex-row",
        className,
      )}
    >
      <FeatureSectionVisual {...visual} className="sm:flex-1" />
      <FeatureSectionDescription {...description} className="sm:flex-1" />
    </div>
  );
}
