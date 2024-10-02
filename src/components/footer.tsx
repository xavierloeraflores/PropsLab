import Link from "next/link";
import { PropsLabLogo } from "./PropsLabLogo";
import { Separator } from "./ui/separator";
import { env } from "~/env";

const teamPageFlag = env.NEXT_PUBLIC_TEAM_PAGE;
const joinPageFlag = env.NEXT_PUBLIC_JOIN_PAGE;

export function Footer() {
  return (
    <footer className="flex w-full flex-col justify-between bg-muted py-6 md:py-12">
      <div className="container flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <PropsLabLogo />
          <span className="text-lg font-semibold">Props Lab</span>
        </Link>
        <nav className="flex flex-row items-center justify-center gap-4 sm:gap-6">
          {teamPageFlag && (
            <Link
              href="/team"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              About the Team
            </Link>
          )}
          {joinPageFlag ? (
            <Link
              href="/join"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Join Now
            </Link>
          ) : (
            <Link
              href="https://whop.com/marketplace/props-lab/"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
              target="_blank"
            >
              Join
            </Link>
          )}
        </nav>
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Props Lab. All rights reserved.
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 px-8">
        <Separator />
        <span className="text-xs text-muted-foreground">
          This platform is meant for entertainment purposes only. If you or
          someone you know has a gambling problem and wants help, call 1-800
          GAMBLER. PropsLab is intended for adult users only.
        </span>
      </div>
    </footer>
  );
}
