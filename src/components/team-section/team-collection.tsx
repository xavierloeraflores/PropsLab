import { TeamMember, type TeamMemberProps } from "./team-member";
import { cn } from "~/lib/utils";
export type TeamCollectionProps = {
  members: TeamMemberProps[];
};

export function TeamCollection({
  members,
  className = "",
}: TeamCollectionProps & { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {members.map((member, index) => {
        return <TeamMember {...member} key={index} />;
      })}
    </div>
  );
}
