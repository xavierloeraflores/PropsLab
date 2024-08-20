export type FeatureSectionDescriptionProps = {
  subtitle: string;
  title: string;
  description: string;
};

export function FeatureSectionDescription({
  subtitle,
  title,
  description,
}: FeatureSectionDescriptionProps) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="text-sm font-bold text-primary">{subtitle}</div>
      <div className="text-3xl font-bold">{title}</div>
      <div className="text-gray-400">{description}</div>
    </div>
  );
}
