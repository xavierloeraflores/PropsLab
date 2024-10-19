import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { SportIcon } from "../ui/sports-icon";

type SymbolCardProps = {
  name: string;
  className?: string;
};

export default function SportsSquare({
  name,
  className = "",
}: SymbolCardProps) {
  return (
    <Card
      className={cn(
        "flex aspect-square w-32 flex-col items-center justify-center bg-gradient-to-br from-black to-primary/20 shadow-sm shadow-primary transition-shadow duration-300 hover:shadow-xl hover:shadow-primary",
        className,
      )}
    >
      <div className="mb-4 flex aspect-square w-12 flex-col items-center justify-center rounded-full bg-black shadow-sm shadow-primary">
        <span className="text-center text-6xl text-primary sm:text-7xl md:text-8xl">
          <SportIcon
            name={name === "E-Sports" ? "esports" : name.toLowerCase()}
          />
        </span>
      </div>
      <span className="text-md text-center font-bold text-primary-foreground sm:text-base">
        {name.toUpperCase()}
      </span>
    </Card>
  );
}
