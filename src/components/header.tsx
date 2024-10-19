// "use client";
// import { useEffect, useState } from "react";
import Link from "next/link";
import { FullLogo } from "./FullLogo";
import { env } from "~/env";
// import { usePathname } from "next/navigation";

const teamPageFlag = env.NEXT_PUBLIC_TEAM_PAGE;
export const Header: React.FC = () => {
  // const pathname = usePathname();
  // const [isJoinPage, setIsJoinPage] = useState(false);
  // useEffect(() => {
  //   setIsJoinPage(pathname === "/join");
  // }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex min-h-16 flex-row items-center justify-between border-b-2 border-accent bg-secondary p-2 px-6 text-secondary-foreground opacity-95 dark:bg-black sm:min-h-24">
      <div className="">
        <Link href="/" className="">
          <FullLogo size={48} />
        </Link>
      </div>
      <div className="ml-auto flex flex-row gap-4 p-4">
        {teamPageFlag && <Link href="/team">About the Team</Link>}
        {/* {!isJoinPage && ( */}
        <Link
          href="/join"
          className="text-md inline-flex h-10 max-w-[600px] items-center justify-center rounded-md bg-primary/80 px-8 font-bold text-primary-foreground shadow-md shadow-primary/80 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Join Now
        </Link>
        {/* )} */}
      </div>
    </header>
  );
};
