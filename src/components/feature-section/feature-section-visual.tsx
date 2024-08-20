import { type ReactNode } from "react";
import { cn } from "~/lib/utils";
export type FeatureSectionVisualProps = {
  children: ReactNode;
  className?: string;
};

export function FeatureSectionVisual({
  children,
  className = "",
}: FeatureSectionVisualProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}
