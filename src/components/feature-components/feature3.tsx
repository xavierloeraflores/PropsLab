"use client";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { AnimatedList } from "~/components/ui/animated-list";

export function Feature3() {
  return (
    <div className="h-fit max-h-fit w-full max-w-[50vw] p-8">
      <GiveawayList />
    </div>
  );
}

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  image?: string;
}

let notifications = [
  {
    name: "Paypal $20",
    description: "",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Madden 2025",
    description: "",
    time: "2m ago",
    icon: "🎮",
    color: "#1E86FF",
    image: "/static/images/features/madden.jpeg",
  },
  {
    name: "Cash App $25",
    description: "",
    time: "10m ago",
    icon: "💰",
    color: "#00C9A7",
  },
  {
    name: "Graded Card",
    description: "",
    time: "2m ago",
    icon: "🃏",
    color: "#1E86FF",
    image: "/static/images/features/psa.jpg",
  },
  {
    name: "Venmo $10",
    description: "",
    time: "5m ago",
    icon: "🤑",
    color: "#00C9A7",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({
  name,
  description,
  icon,
  color,
  time,
  image = "",
}: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            {/* <span className="mx-1">·</span> */}
            {/* <span className="text-xs text-gray-500">{time}</span> */}
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
          <div className="flex w-full flex-col items-center">
            {image != "" && (
              <Image
                className="rounded-md"
                src={image}
                alt={name}
                width={100}
                height={200}
              />
            )}
          </div>
        </div>
      </div>
    </figure>
  );
};

export function GiveawayList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[400px] w-full flex-col overflow-hidden rounded-lg border bg-background p-6 md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
