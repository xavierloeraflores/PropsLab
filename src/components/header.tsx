// "use client";
// import { useEffect, useState } from "react";
import Link from "next/link";
import { FullLogo } from "./FullLogo";
// import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  // const pathname = usePathname();
  // const [isJoinPage, setIsJoinPage] = useState(false);
  // useEffect(() => {
  //   setIsJoinPage(pathname === "/join");
  // }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex min-h-16 flex-row items-center justify-between border-b-2 border-accent bg-secondary p-2 px-2 text-secondary-foreground opacity-95 dark:bg-black sm:min-h-24 sm:px-6">
      <div className="">
        <Link href="/" className="">
          <FullLogo size={48} />
        </Link>
      </div>
      <div className="ml-auto flex flex-row items-center gap-2 p-2 sm:gap-4 sm:p-4 md:gap-8 lg:gap-12">
        <Link href="/team" className="sm:text-md text-sm font-bold">
          Team
        </Link>

        <Link
          href="/join"
          className="sm:text-md inline-flex h-10 max-w-[600px] items-center justify-center rounded-md bg-primary/80 px-2 text-sm font-bold text-primary-foreground shadow-md shadow-primary/80 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:px-4 md:px-8"
        >
          Join Now
        </Link>
      </div>
    </header>
  );
};
