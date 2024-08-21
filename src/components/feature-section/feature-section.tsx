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
import { DivContainer } from "../framer-container";

export function FeatureSection({
  description,
  visual,
  reverse = false,
  className = "",
}: FeatureSectionProps & { className?: string }) {
  return (
    <DivContainer
      className={cn(
        "flex min-h-96 flex-col gap-6 p-6 text-white",
        reverse ? "sm:flex-row-reverse" : "sm:flex-row",
        className,
      )}
    >
      <FeatureSectionVisual {...visual} className="sm:flex-1" />
      <FeatureSectionDescription {...description} className="sm:flex-1" />
    </DivContainer>
  );
}
