import { Users, Zap, Heart } from "lucide-react";

export function WhyJoin() {
  return (
    <div className="mt-8 space-y-4">
      <h3 className="mb-16 text-center text-3xl font-semibold">
        Why Join Our Community?
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <WhyJoinReason
          title="Connect"
          description="Meet people who share your interests and passions"
        />
        <WhyJoinReason
          title="Learn"
          description="Gain new skills and knowledge from community experts"
        />
        <WhyJoinReason
          title="Grow"
          description="Develop personally and professionally with our supportive network"
        />
      </div>
    </div>
  );
}

function WhyJoinReason({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const iconClassName = "h-16 w-16 text-primary mb-4";
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      {title === "Connect" && <Users className={iconClassName} />}
      {title === "Learn" && <Zap className={iconClassName} />}
      {title === "Grow" && <Heart className={iconClassName} />}
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-md text-primary-foreground/80">{description}</p>
    </div>
  );
}
