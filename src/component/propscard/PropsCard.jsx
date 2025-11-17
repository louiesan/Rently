import { BathIcon, Bed, Heart, MapPinHouse, Radio, Sofa } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addRemoveFavorite } from "../../store/favorites/favoriteSlice";
import toast from "react-hot-toast";
export const notify = (index) =>
  index !== -1
    ? toast.success("item has removed", {
        icon: "🗑️",
      })
    : toast.success("item has been saved");
export default function PropsCard({ props, type }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteSlice.favorite);
  const index = favorites?.findIndex((e) => e.listingId === props.listingId);

  return (
    <div className="w-full h-full max-h-96 flex flex-col bg-white rounded-md items-center justify-between">
      <div className="relative w-full min-h-40 h-fit overflow-hidden rounded-t-md">
        <div
          onClick={() => {
            dispatch(addRemoveFavorite({ section: type, ...props }));
            notify(index);
          }}
          className="absolute top-1 right-1 bg-white/80 w-fit h-fit p-1.5 rounded-full cursor-pointer"
        >
          <Heart
            fill={index !== -1 ? `#fb2c36` : "transparent"}
            color="#fb2c36"
            size={20}
          />
        </div>
        <div className="absolute w-fit h-fit top-1 left-1 rounded-md bg-white/80 text-emerald-500 text-sm p-1.5">
          {type === "for-sale" ? "For Sale" : "For Rent"}
        </div>
        <img
          fetchPriority="high"
          loading="eager"
          className="w-full h-40 aspect-auto object-cover "
          src={props?.imageUris ? props?.imageUris[0] : props.imagePreview.src}
          alt="propImg"
        />
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-center px-5 my-2.5">
        <h2 className="text-base font-bold font-[karla] text-indigo-400 text-left capitalize">
          {props.title}
        </h2>
        <p className="text-[10px] font-medium font-[Poppins] text-indigo-300 flex items-center justify-start gap-2">
          <MapPinHouse strokeWidth={2} size={12} />{" "}
          {props?.address || props.branch.address}
        </p>
      </div>
      <div className="w-full h-fit flex flex-row justify-between items-center px-5">
        <div className="w-fit h-fit flex flex-col items-start justify-between gap-1 ">
          <p className="text-[10px] font-medium font-[Poppins] text-indigo-300 flex items-center justify-start gap-2">
            <Bed strokeWidth={3} size={15} />{" "}
            {props.attributes?.bedrooms || props?.counts?.numBedrooms} beds
          </p>
          <p className="text-[10px] font-medium font-[Poppins] text-indigo-300 flex items-center justify-start gap-2">
            <Radio strokeWidth={3} size={15} />{" "}
            {props.publicationStatus === "Live" ? "Live" : "offline"}
          </p>
        </div>
        <div className="w-fit h-fit flex flex-col items-start justify-center gap-1 ">
          <p className="text-[10px] font-medium font-[Poppins] text-indigo-300 flex items-center justify-start gap-2">
            <BathIcon strokeWidth={3} size={15} />{" "}
            {props.attributes?.bathrooms || props?.counts?.numBathrooms} baths
          </p>
          <p className="text-[10px] font-medium font-[Poppins] text-indigo-300 flex items-center justify-start gap-2">
            <Sofa strokeWidth={3} size={15} />{" "}
            {props.attributes?.livingRooms ||
              props?.counts?.numLivingRooms ||
              0}{" "}
            LR
          </p>
        </div>
      </div>
      <div className="w-[90%] h-0.5 bg-indigo-400 rounded-full col-span-2 my-2.5"></div>

      <div className="w-full h-fit flex items-center justify-between px-5 pb-5">
        {type === "for-sale" ? (
          <h4 className="text-base font-bold font-[Karla]">
            {props?.pricing?.label}
          </h4>
        ) : (
          <h4 className="text-md text-black font-bold font-[Karla]">
            {props?.pricing?.label}/<sub>month</sub>
          </h4>
        )}
        <button className="w-fit h-fit text-base text-white bg-indigo-400 rounded-xl cursor-pointer px-2.5 py-1 hover:bg-indigo-500 transition-all duration-300 ease-in-out">
          <Link to={`/detail/${props.listingId}`}>Details</Link>
        </button>
      </div>
    </div>
  );
}
