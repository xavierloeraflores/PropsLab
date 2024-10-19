import SportsSquare from "./sports-square";

const sports = [
  "Football",
  "Basketball",
  "Baseball",
  "Hockey",
  "Soccer",
  "E-Sports",
];

export default function SportsSquareCollection() {
  return (
    <div className="container mx-auto flex w-full flex-col items-center p-4">
      <div className="mx-auto flex flex-row flex-wrap justify-center gap-4">
        {sports.map((name, index) => (
          <SportsSquare key={index} name={name} />
        ))}
      </div>
    </div>
  );
}
