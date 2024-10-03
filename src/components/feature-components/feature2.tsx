import Image from "next/image";

export function Feature2() {
  return (
    <div className="h-fit max-h-fit w-full max-w-[50vw] p-8">
      <Image
        className="rounded-lg shadow-md shadow-primary"
        src="/static/images/other/slips.png"
        alt="Feature 2"
        width={500}
        height={500}
      />
    </div>
  );
}
