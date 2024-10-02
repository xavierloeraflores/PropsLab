import Link from "next/link";
import{ PropsLabLogo} from "./PropsLabLogo";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="w-full bg-muted py-6 md:py-12 flex flex-col justify-between">
      <div className="container flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <PropsLabLogo />
          <span className="text-lg font-semibold">Props Lab</span>
        </Link>
        <nav className="flex flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            href="/team"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            About the Team
          </Link>
          <Link
            href="/join"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Join
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Props Lab. All rights reserved.
        </p>
      </div>
      <div className="mt-4 px-8 flex flex-col gap-2 items-center">
        <Separator/>
        <span className="text-muted-foreground text-xs">This platform is meant for entertainment purposes only.
        If you or someone you know has a gambling problem and wants help, call 1-800 GAMBLER. PropsLab is intended for adult users only.</span>
      </div>
    </footer>
  );
}
