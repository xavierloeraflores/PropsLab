import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Bet Smarter,
              <br /> Not Harder
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              We are a community of sports and betting enthusiasts who use
              cutting-edge technology to predict outcomes and provide valuable
              insights into the world of sports betting.
            </p>
          </div>
          <Link
            href="/join"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Join Now
          </Link>
        </div>
        <Image
          src="/assets/images/logo/1024x1024/Logo_1024x1024_white.png"
          width={900}
          height={650}
          alt="Hero"
          className="mx-auto aspect-[9/6] overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </section>
  );
}
