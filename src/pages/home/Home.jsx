import villa1 from "../../assets/villatwo.webp";
import apartement from "../../assets/apartement.webp";
import condo from "../../assets/condo.webp";
import singleFhome from "../../assets/singleFhome.webp";
import townhome from "../../assets/townhome.webp";
import { useEffect } from "react";
import { MoveRight, Star } from "lucide-react";
import Search from "../../component/searchbar/Search";
import Properties from "../../component/properties/Properties";

export default function Home() {
  const properties = [
    {
      id: 1,
      name: "Town Home",
      img: townhome,
      para: "Town Homes",
    },
    {
      id: 2,
      name: "Apartment",
      img: apartement,
      para: "Apartements",
    },
    {
      id: 3,
      name: "Single Family Home",
      img: singleFhome,
      para: "Homes",
    },
    {
      id: 4,
      name: "Condo",
      img: condo,
      para: "Condos",
    },
  ];
  return (
    <div className="w-full h-fit flex-1 flex flex-col gap-7.5 px-2.5 pb-5">
      {/* Hero Main */}
      <div className="w-full h-fit grid grid-cols-1 mx:grid-cols-2 px-2.5">
        <div className="w-full h-full flex flex-col justify-center items-center mx:items-start gap-3.5 ">
          <h2 className="text-center mx:text-left text-3xl mx:text-4xl font-bold font-[Montserrat]">
            In <span className="text-indigo-400">Rently</span> We Provide
          </h2>
          <h3 className="text-2xl text-center mx:text-left mx:text-3xl font-medium font-[Poppins]">
            The Best Rental Experience!
          </h3>
          <p className="text-sky-400 font-bold text-sm font-[Inter] mx:text-left text-center">
            Your comfort is our priority. We offer a wide range of rental
            properties to suit your needs.
          </p>
          <div className="w-full h-fit grid grid-cols-3">
            <div className="group cursor-default w-full h-fit flex flex-col items-center justify-center gap-0.5">
              <h4 className="group-hover:-translate-y-1 transition-all duration-300 ease-in-out  text-2xl sm:text-3xl font-bold font-[Sansation] text-sky-500">
                Hosts:
              </h4>
              <p className=" group-hover:-translate-y-1 transition-all duration-300 ease-in-out  font-bold text-2xl font-[Inter] ">
                10K+
              </p>
            </div>
            <div className="group cursor-default w-full h-fit flex flex-col items-center justify-center gap-0.5 border-l-2 border-r-2">
              <h4 className="group-hover:-translate-y-1 transition-all duration-300 ease-in-out  text-2xl sm:text-3xl font-bold font-[Sansation] text-sky-500">
                Reviews:
              </h4>
              <p className="group-hover:-translate-y-1 transition-all duration-300 ease-in-out  flex items-center font-bold text-2xl font-[Inter] ">
                4.5 <Star color="blue" size={20} />
              </p>
            </div>
            <div className="group cursor-default w-full h-fit flex flex-col items-center justify-center gap-0.5">
              <h4 className="group-hover:-translate-y-1 transition-all duration-300 ease-in-out  text-2xl sm:text-3xl font-bold font-[Sansation] text-sky-500">
                Users:
              </h4>
              <p className=" group-hover:-translate-y-1 transition-all duration-300 ease-in-out  font-bold text-2xl font-[Inter] ">
                510K+
              </p>
            </div>
          </div>
          {/* Search Bar */}
          <Search />
        </div>
        <div className="w-full h-fit flex justify-center mx:justify-end items-center">
          <img className="w-96" src={villa1} alt="Villa_img" />
        </div>
      </div>
      {/* Hero Plus */}
      <div className="w-full h-fit flex flex-col gap-2">
        <h2 className="px-2.5 font-bold font-[Karla] text-2xl sm:text-3xl capitalize">
          Discover About Our Properties:
        </h2>
        <div className="w-full h-fit justify-center items-center gap-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          {properties && properties.length > 0
            ? properties.map((e, i) => <Properties key={i} property={e} />)
            : null}
        </div>
      </div>
    </div>
  );
}
