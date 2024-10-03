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
        reverse ? "md:flex-row-reverse" : "md:flex-row",
        className,
      )}
    >
      <FeatureSectionVisual {...visual} className="md:flex-1" />
      <FeatureSectionDescription {...description} className="md:flex-1" />
    </DivContainer>
  );
}
