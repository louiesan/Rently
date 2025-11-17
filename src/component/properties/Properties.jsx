import { MoveRight } from "lucide-react";
import { Link } from "react-router";

export default function Properties({ property }) {
  return (
    <div
      style={{
        backgroundImage: `url(${property.img})`,
      }}
      className="relative group w-full h-52  flex flex-col gap-1 rounded-md bg-cover place-content-start overflow-hidden p-2.5 "
    >
      <span className="absolute w-full h-full bg-black/40 mx:bg-transparent  mx:group-hover:bg-black/40 left-0 top-0 transition-all duration-300 ease-in-out"></span>
      <h2 className="z-10 bg-white/80 border border-white backdrop-blur-lg drop-shadow-black drop-shadow-lg p-1 rounded-md text-sm w-fit mx:bg-transparent mx:text-white mx:text-base font-medium font-[Poppins] mx:-translate-x-[200%] mx:group-hover:translate-x-0 transition-all duration-300 ease-in-out">
        {property.name}
      </h2>
      <p className="z-10 bg-white/80 border border-white backdrop-blur-lg drop-shadow-black drop-shadow-lg p-1 rounded-md text-[10px] w-fit mx:bg-transparent mx:text-white mx:text-xs font-medium font-[Poppins] mx:-translate-x-[200%]  mx:group-hover:translate-x-0 transition-all duration-300 ease-in-out">
        Learn about {property.para}.
      </p>

      <Link
        to={`/article/${property.id}`}
        className="justify-self-end bg-white/80 border border-white backdrop-blur-lg drop-shadow-black drop-shadow-lg p-1 rounded-md text-black w-fit h-fit flex items-center justify-center gap-1 self-end mx:self-auto z-10 cursor-pointer  text-base font-medium font-[Poppins] mx:-translate-x-[200%]  mx:group-hover:translate-x-0 transition-all duration-300 ease-in-out"
      >
        Read More
        <MoveRight size={30} />
      </Link>
    </div>
  );
}
