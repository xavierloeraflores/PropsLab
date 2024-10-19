import { cn } from "~/lib/utils";

export type FeatureSectionDescriptionProps = {
  subtitle: string;
  title: string;
  description: string;
};

export function FeatureSectionDescription({
  subtitle,
  title,
  description,
  className = "",
}: FeatureSectionDescriptionProps & { className?: string }) {
  return (
    <div className={cn("flex flex-col justify-center gap-4", className)}>
      <div className="text-md font-bold text-primary lg:text-lg">
        {subtitle}
      </div>
      <div className="text-4xl font-bold">{title}</div>
      <div className="text-md max-w-[700px] text-gray-100">{description}</div>
    </div>
  );
}
