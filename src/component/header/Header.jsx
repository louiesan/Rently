import logo from "../../assets/logo.webp";
import {
  Bookmark,
  CircleUserRound,
  Home,
  HousePlus,
  Mail,
  Menu,
  Paperclip,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Desktop Header */}
      <header className="hidden w-full h-fit p-5  mx:flex items-center justify-between">
        <div className="w-fit h-fit flex items-center justify-center gap-1">
          <img className="w-8" src={logo} alt="LogoImg" />
          <NavLink to={"/"}>
            <h1 className="text-3xl font-bold font-[Noto_Sans] transition-all duration-300 ease-in-out hover:text-blue-300">
              Rentaly
            </h1>
          </NavLink>
        </div>
        <div>
          <div className="w-fit h-fit flex items-center justify-center gap-5">
            <ul className="w-fit h-fit flex items-center justify-center gap-2.5">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-blue-300" : "text-black"
                }
              >
                <li className="text-xl font-medium font-[Poppins] transition-all duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-1 flex items-center justify-center gap-1">
                  <Home size={20} /> Home
                </li>
              </NavLink>
              <NavLink
                to={"/properties"}
                className={({ isActive }) =>
                  isActive ? "text-blue-300" : "text-black"
                }
              >
                <li className="text-xl font-medium font-[Poppins] transition-all duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-1 flex items-center justify-center gap-1">
                  <HousePlus size={20} /> Properties
                </li>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "text-blue-300" : "text-black"
                }
              >
                <li className="text-xl font-medium font-[Poppins] transition-all duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-1 flex items-center justify-center gap-1">
                  <Paperclip size={20} /> About
                </li>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "text-blue-300" : "text-black"
                }
              >
                <li className="text-xl font-medium font-[Poppins] transition-all duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-1 flex items-center justify-center gap-1">
                  <Mail size={20} /> Contact
                </li>
              </NavLink>
            </ul>
            <div className="w-fit h-fit flex items-center justify-center gap-2">
              <button className="w-fit h-fit flex justify-center items-center gap-1 rounded-sm cursor-pointer bg-indigo-400 font-medium font-[Poppins] text-white p-2 hover:bg-indigo-300 transition-all duration-300">
                <CircleUserRound />
                Coming soon
              </button>
              <Link
                to="/favorites"
                className="w-fit h-fit flex justify-center items-center gap-1 p-2 bg-indigo-400 font-medium font-[Poppins] text-white hover:bg-indigo-300 transition-all duration-300 cursor-pointer rounded-md"
              >
                <Bookmark color="yellow" fill="yellow" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Header */}
      <header className="relative flex w-full h-fit p-5  mx:hidden items-center justify-between">
        <div className="w-fit h-fit flex items-center justify-center gap-1">
          <img className="w-8" src={logo} alt="LogoImg" />
          <NavLink to={"/"}>
            <h1 className="text-3xl font-bold font-[Noto_Sans] transition-all duration-300 ease-in-out hover:text-blue-300">
              Rentaly
            </h1>
          </NavLink>
        </div>
        <div className="w-fit h-fit">
          {isOpen ? (
            <X
              onClick={() => setIsOpen((pre) => !pre)}
              className="cursor-pointer"
              size={30}
            />
          ) : (
            <Menu
              onClick={() => setIsOpen((pre) => !pre)}
              className="cursor-pointer"
              size={30}
            />
          )}
        </div>
        {isOpen && (
          <ul className="absolute w-3/4 top-[calc(100%+76px)] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-lg border-white border-2 rounded-md drop-shadow-lg drop-shadow-black/40 z-50 p-2.5 flex flex-col items-start justify-center gap-2.5">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-blue-300" : "text-black"
              }
            >
              <li className="text-lg sm:text-xl font-medium font-[Poppins] transition-all duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-1 flex items-center justify-center gap-1">
                <Home size={20} /> Home
              </li>
            </NavLink>
            <NavLink
              to={"/properties"}
              className={({ isActive }) =>
                isActive ? "text-blue-300" : "text-black"
              }
            >
              <li className="text-lg sm:text-xl font-medium font-[Poppins] transition-all duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-1 flex items-center justify-center gap-1">
                <HousePlus size={20} /> Properties
              </li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "text-blue-300" : "text-black"
              }
            >
              <li className="text-lg sm:text-xl font-medium font-[Poppins] transition-all duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-1 flex items-center justify-center gap-1">
                <Paperclip size={20} /> About
              </li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "text-blue-300" : "text-black"
              }
            >
              <li className="text-lg sm:text-xl font-medium font-[Poppins] transition-all duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-1 flex items-center justify-center gap-1">
                <Mail size={20} /> Contact
              </li>
            </NavLink>
            <div className="w-fit h-fit flex items-center justify-center gap-2">
              <button className="w-fit h-fit flex justify-center items-center gap-1 rounded-sm cursor-pointer bg-indigo-400 font-medium font-[Poppins] text-white p-2 hover:bg-indigo-300 transition-all duration-300">
                <CircleUserRound />
                Coming soon
              </button>
              <Link
                to="/favorites"
                className="w-fit h-fit flex justify-center items-center gap-1 p-2 bg-indigo-400 font-medium font-[Poppins] text-white hover:bg-indigo-300 transition-all duration-300 cursor-pointer rounded-md"
              >
                <Bookmark color="yellow" fill="yellow" />
              </Link>
            </div>
          </ul>
        )}
      </header>
    </>
  );
}
