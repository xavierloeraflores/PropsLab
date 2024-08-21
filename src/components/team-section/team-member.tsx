import Image from "next/image";
import { cn } from "~/lib/utils";

export type TeamMemberProps = {
  name: string;
  imageSrc?: string;
  title: string;
  description: string;
};

export function TeamMember({
  name,
  imageSrc = "/static/images/icon/256x256/256x256_white.png",
  title,
  description,
  className,
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
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-muted-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
