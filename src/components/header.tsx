import Link from "next/link";
import { FullLogo } from "./FullLogo";
import { env } from "~/env";

const teamPageFlag = env.NEXT_PUBLIC_TEAM_PAGE;
const joinPageFlag = env.NEXT_PUBLIC_JOIN_PAGE;
export const Header: React.FC = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex min-h-16 flex-row items-center justify-between border-b-2 border-accent bg-secondary p-2 px-6 text-secondary-foreground opacity-95 sm:min-h-24">
      <div className="">
        <Link href="/" className="">
          <FullLogo size={48} />
        </Link>
      </div>
      <div className="ml-auto flex flex-row gap-4 p-4">
        {teamPageFlag && <Link href="/team">About the Team</Link>}
        {joinPageFlag ? (
          <Link href="/join">Join</Link>
        ) : (
          <Link href="https://whop.com/marketplace/props-lab/" target="_blank">
            Join Now
          </Link>
        )}
      </div>
    </header>
  );
};
