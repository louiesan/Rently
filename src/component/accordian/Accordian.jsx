import { ChevronDown, ChevronUp } from "lucide-react";
import AccShower from "./AccShower";
import { Icons } from "../../pages/detail/Detail";
import { useState } from "react";

export default function Accordian({ nearbies }) {
  console.log(nearbies);
  const [isSelected, setIsSelected] = useState(null);

  function hundleClick(newAcc) {
    isSelected === newAcc ? setIsSelected(null) : setIsSelected(newAcc);
  }

  const Destinations = nearbies ? Object?.keys(nearbies) : null;
  const Nearby = nearbies
    ? Object.keys(nearbies).map((e) => ({
        [e]: nearbies[e],
      }))
    : null;
  return (
    <>
      {Nearby &&
        Nearby?.map((e, i) => (
          <div
            key={i}
            onClick={() => hundleClick(i)}
            className="w-full h-fit flex flex-col cursor-pointer"
          >
            <div className="w-full h-10 flex flex-nowrap gap-1 text-indigo-400 font-medium font-[Karla] items-center justify-between p-2 bg-white rounded-md">
              <div className="w-fit h-fit flex flex-row justify-between items-center gap-1">
                {Icons[Destinations[i]]} All Nearby{" "}
                {Destinations[i].includes("_")
                  ? Destinations[i].split("_").join(" ")
                  : Destinations[i]}{" "}
              </div>
              {isSelected === i ? <ChevronUp /> : <ChevronDown />}
            </div>
            <AccShower
              key={i}
              isSelected={isSelected === i}
              icon={Destinations[i]}
              object={e[Destinations[i]]}
            />
          </div>
        ))}
    </>
  );
}
