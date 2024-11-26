import Image from "next/image";
import { cn } from "~/lib/utils";
import { SportIcon } from "~/components/ui/sports-icon";

export type TeamMemberProps = {
  name: string;
  imageSrc?: string;
  title: string;
  description: string;
  sports?: string[];
};

export function TeamMember({
  name,
  imageSrc = "/static/images/icon/md256/white.png",
  title,
  description,
  className,
  sports = [],
}: TeamMemberProps & { className?: string }) {
  return (
    <div className={cn("grid gap-4 text-center", className)}>
      <div className="relative mx-auto flex h-[200px] w-[200px] items-center justify-center">
        <Image
          src={imageSrc}
          alt={name}
          className="rounded-full object-cover"
          width={256}
          height={256}
        />
      </div>
      <div className="flex flex-col items-center space-y-1">
        <h3 className="text-center text-lg font-semibold">{name}</h3>
        <p className="text-center text-muted-foreground">{title}</p>
        {/* <p className="text-sm text-muted-foreground">{description}</p> */}
        <div className="flex justify-center space-x-2 text-primary">
          {sports.map((sport, index) => {
            return <SportIcon name={sport} key={index} className="h-8 w-8" />;
          })}
        </div>
      </div>
    </div>
  );
}
