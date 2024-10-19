import { Users, Zap, Heart } from "lucide-react";

export function WhyJoin() {
  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-center text-2xl font-semibold">
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
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      {title === "Connect" && <Users className="h-8 w-8 text-primary" />}
      {title === "Learn" && <Zap className="h-8 w-8 text-primary" />}
      {title === "Grow" && <Heart className="h-8 w-8 text-primary" />}
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-primary-foreground">{description}</p>
    </div>
  );
}
