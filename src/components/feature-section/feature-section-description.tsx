import { cn } from "~/lib/utils";

export type FeatureSectionDescriptionProps = {
  subtitle: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  emphasis?: string | null;
};

export function FeatureSectionDescription({
  subtitle,
  title,
  description,
  className = "",
  bulletPoints = [],
  emphasis = null,
}: FeatureSectionDescriptionProps & { className?: string }) {
  return (
    <div className={cn("flex flex-col justify-center gap-4", className)}>
      {/* <div className="text-md font-bold text-primary lg:text-lg">
        {subtitle}
      </div> */}
      <div className="text-4xl font-bold text-primary">{title}</div>
      <div className="max-w-[700px] text-lg text-primary-foreground/85">
        {!emphasis && description}
        {emphasis && description.slice(0, description.indexOf(emphasis))}
        {emphasis && (
          <span className="text-xl font-bold text-primary">{emphasis}</span>
        )}
        {emphasis &&
          description.slice(description.indexOf(emphasis) + emphasis.length)}
      </div>
      {bulletPoints.length > 0 && (
        <ul className="list-disc pl-6">
          {bulletPoints.map((bulletPoint, index) => (
            <li
              key={index}
              className="list-none text-lg font-bold text-primary"
            >
              {bulletPoint}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
