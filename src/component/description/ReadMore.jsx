import { useState } from "react";

export default function ReadMore({ detail }) {
  const [isShown, setIsShown] = useState(false);
  const style = {
    height: isShown ? "fit-content" : "20px",
  };
  return (
    <div className="w-fit h-fit flex flex-wrap transition-all duration-300 ease-in-out">
      <div className="relative overflow-hidden w-fit h-fit " style={style}>
        {detail}
      </div>
      {!isShown && (
        <span className="text-xl font-bold font-[Karla] z-10">...</span>
      )}
      {isShown ? (
        <button
          onClick={() => setIsShown(false)}
          className="w-fit h-fit text-xl font-[Karla] text-indigo-600 underline cursor-pointer"
        >
          Hide Description
        </button>
      ) : (
        <button
          onClick={() => setIsShown(true)}
          className="w-fit h-fit text-xl font-[Karla] text-indigo-600 underline cursor-pointer"
        >
          Read full Description
        </button>
      )}
    </div>
  );
}
