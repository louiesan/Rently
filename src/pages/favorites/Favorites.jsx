import { useSelector } from "react-redux";
import PropsCard from "../../component/propscard/PropsCard";
import bookmark from "../../assets/bookmark.webp";
import { NavLink } from "react-router";

export default function Favorites() {
  const favorites = useSelector((state) => state.favoriteSlice.favorite);
  return favorites && favorites.length > 0 ? (
    <div className="w-full h-fit  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2.5">
      {favorites.map((e) => (
        <PropsCard props={e} type={e.section} />
      ))}
    </div>
  ) : (
    <NavLink className="w-full h-fit flex flex-col items-center flex-1">
      <h2 className="w-fit text-xl text-center sm:text-3xl font- gap-2bold font-[Poppins]">
        You haven't Save any Property yet!
      </h2>
      <img className="w-52" src={bookmark} alt="FavPng" />
    </NavLink>
  );
}
