import Image from "next/image";

export function Feature2() {
  return (
    <Image
      className="rounded-lg shadow-md shadow-primary"
      src="/static/images/features/slips.png"
      alt="Feature 2"
      width={500}
      height={500}
    />
  );
}
