import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="fixed left-0 right-0 top-0 flex min-h-16 flex-row items-center justify-between border-b-2 border-accent bg-secondary p-4 px-6 text-secondary-foreground opacity-95 sm:min-h-24">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="ml-auto flex flex-row gap-4">
        <Link href="/team">About the Team</Link>
        <Link href="/join">Join</Link>
      </div>
    </header>
  );
};
