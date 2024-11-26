import Marquee from "../ui/marquee";
import { Card } from "../ui/card";
import { cn } from "~/lib/utils";
import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

export function Feature2() {
  return (
    <div className="y relative m-4 flex min-h-64 w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg border bg-background shadow-md shadow-primary">
      <Marquee pauseOnHover className="[--duration:20s]">
        {picks.map((pick, idx) => (
          <PickCard key={idx} {...pick} className="" />
        ))}
      </Marquee>
    </div>
  );
}

// Images: https://www.espn.com
const picks: PickCardProps[] = [
  {
    name: "Travis Kelce",
    league: "NFL",
    image: "/static/images/players/kelce.png",
    moreLess: true,
    strike: 62.5,
    category: "Rec Yards",
  },
  {
    name: "Lionel Messi",
    league: "MLS",
    image: "/static/images/players/messi.png",
    moreLess: false,
    strike: 52.5,
    category: "Passes",
  },
  {
    name: "Shohei Ohtani",
    league: "MLB",
    image: "/static/images/players/ohtani.png",
    moreLess: true,
    strike: 0.5,
    category: "Walks",
  },
  {
    name: "Stephen Curry",
    league: "NBA",
    image: "/static/images/players/curry.png",
    moreLess: true,
    strike: 22.5,
    category: "Points",
  },
  {
    name: "Kirk Cousins",
    league: "NFL",
    image: "/static/images/players/cousins.png",
    moreLess: false,
    strike: 427.5,
    category: "Pass Yards",
  },
  {
    name: "Tyreek Hill",
    league: "NFL",
    image: "/static/images/players/hill.png",
    moreLess: false,
    strike: 97.5,
    category: "Rec Yards",
  },
  {
    name: "Cristiano Ronaldo",
    league: "SPL",
    image: "/static/images/players/ronaldo.png",
    moreLess: true,
    strike: 3,
    category: "Shots",
  },
  {
    name: "Aaron Judge",
    league: "MLB",
    image: "/static/images/players/judge.png",
    moreLess: true,
    strike: 0.5,
    category: "Hits",
  },
];

type PickCardProps = {
  name: string;
  league: string;
  image: string;
  moreLess: boolean;
  strike: number;
  category: string;
  className?: string;
};

function PickCard({
  name,
  league,
  image,
  moreLess,
  strike,
  category,
  className = "",
}: PickCardProps) {
  const strikeColor = moreLess ? "text-green-400" : "text-red-400";
  return (
    <Card
      className={cn("bg-background px-4 py-2 dark:bg-slate-900", className)}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center">
          <Avatar className="h-20 w-24 bg-primary">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-xl font-bold text-primary-foreground">{name}</h2>
          <p className="text-sm text-gray-300">{league}</p>
        </div>
        <div className="flex h-16 flex-row items-center justify-center gap-1 rounded-lg bg-slate-700 p-2 font-bold text-primary-foreground">
          <p className="text-sm">{category}</p>
          <Separator className="mx-2 h-8 w-0.5 bg-primary-foreground" />
          <div
            className={
              "flex flex-col items-center justify-between " + strikeColor
            }
          >
            <p className="text-center text-lg">{strike}</p>
            <p className="text-center text-sm">{moreLess ? "More" : "Less"}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
