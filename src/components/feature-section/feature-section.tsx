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
        "mb-8 flex min-h-96 max-w-[100vw] flex-col gap-6 px-2 py-6 text-white md:p-6",
        reverse ? "md:flex-row-reverse" : "md:flex-row",
        className,
      )}
    >
      <FeatureSectionVisual
        {...visual}
        className="h-fit max-h-fit w-full p-6 md:max-w-[50vw] md:flex-1"
      />
      <FeatureSectionDescription {...description} className="md:flex-1" />
    </DivContainer>
  );
}
