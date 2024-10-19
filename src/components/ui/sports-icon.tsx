// Football, Basketball, Baseball, Hockey, Soccer, E-Sports

import { cn } from "~/lib/utils";
import {
  MdOutlineSportsSoccer,
  MdOutlineSportsFootball,
  MdOutlineSportsBaseball,
  MdOutlineSportsBasketball,
  MdOutlineSportsHockey,
  MdOutlineSportsMartialArts,
  MdOutlineSportsEsports,
} from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

type SportSymbolProps = {
  name: string;
  className?: string;
};

export function SportIcon({
  name,
  className = "",
}: SportSymbolProps & { className?: string }) {
  const isInList: boolean =
    [
      "football",
      "basketball",
      "baseball",
      "hockey",
      "soccer",
      "esports",
      "mma",
    ].includes(name.toLowerCase()) || false;
  return (
    <div className={cn("", className)}>
      {name.toLowerCase() === "football" && (
        <MdOutlineSportsFootball className="h-6 w-6" />
      )}
      {name.toLowerCase() === "basketball" && (
        <MdOutlineSportsBasketball className="h-6 w-6" />
      )}
      {name.toLowerCase() === "baseball" && (
        <MdOutlineSportsBaseball className="h-6 w-6" />
      )}
      {name.toLowerCase() === "hockey" && (
        <MdOutlineSportsHockey className="h-6 w-6" />
      )}
      {name.toLowerCase() === "soccer" && (
        <MdOutlineSportsSoccer className="h-6 w-6" />
      )}
      {name.toLowerCase() === "esports" && (
        <MdOutlineSportsEsports className="h-6 w-6" />
      )}
      {name.toLowerCase() === "mma" && (
        <MdOutlineSportsMartialArts className="h-6 w-6" />
      )}
      {isInList === false && <FaRegStar className="h-6 w-6" />}
    </div>
  );
}
