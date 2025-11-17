import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.webp";

export default function Footer() {
  return (
    <div className="w-full h-fit bg-transparent justify-self-end text-black flex flex-wrap items-center justify-center p-5 gap-2.5">
      <NavLink
        className="w-fit h-fit flex items-center justify-center gap-1"
        to={"/"}
      >
        <img className="w-8" src={logo} alt="LogoImg" />
        <h1 className="text-3xl font-bold font-[Noto_Sans] transition-all duration-300 ease-in-out hover:text-blue-300">
          Rentaly
        </h1>
      </NavLink>{" "}
      <h4 className="text-lg font-normal font-[Karla]">
        © 2024 Rently. All rights reserved.
      </h4>
    </div>
  );
}
