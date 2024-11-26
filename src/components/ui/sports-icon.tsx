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
  iconClassName?: string;
};

export function SportIcon({
  name,
  className = "",
  iconClassName = "",
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
  const iconStyles = cn("h-6 w-6", iconClassName);
  return (
    <div className={cn("", className)}>
      {name.toLowerCase() === "football" && (
        <MdOutlineSportsFootball className={iconStyles} />
      )}
      {name.toLowerCase() === "basketball" && (
        <MdOutlineSportsBasketball className={iconStyles} />
      )}
      {name.toLowerCase() === "baseball" && (
        <MdOutlineSportsBaseball className={iconStyles} />
      )}
      {name.toLowerCase() === "hockey" && (
        <MdOutlineSportsHockey className={iconStyles} />
      )}
      {name.toLowerCase() === "soccer" && (
        <MdOutlineSportsSoccer className={iconStyles} />
      )}
      {name.toLowerCase() === "esports" && (
        <MdOutlineSportsEsports className={iconStyles} />
      )}
      {name.toLowerCase() === "mma" && (
        <MdOutlineSportsMartialArts className={iconStyles} />
      )}
      {isInList === false && <FaRegStar className={iconStyles} />}
    </div>
  );
}
