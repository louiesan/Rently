import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchDetail, fetchNearbies } from "../../store/details/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import CntFrame from "../../component/contact/CntFrame";
import ReadMore from "../../component/description/ReadMore";
import { notify } from "../../component/propscard/PropsCard";
import {
  Sofa,
  ChevronLeft,
  Bed,
  Bath,
  RockingChair,
  Check,
  Bookmark,
  School,
  EvCharger,
  Plane,
} from "lucide-react";
import Accordian from "../../component/accordian/Accordian";
import Loader from "../../component/loader/Loader";
import { addRemoveFavorite } from "../../store/favorites/favoriteSlice";
export const Icons = {
  bed: <Bed />,
  sofa: <Sofa />,
  bath: <Bath />,
  chair: <RockingChair />,
  schools: <School />,
  secondary_schools: <School />,
  primary_schools: <School />,
  stations: <EvCharger />,
  airports: <Plane />,
};
export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const propDetail = useSelector((state) => state?.detailSlice?.details);
  const favorites = useSelector((state) => state.favoriteSlice.favorite);
  const nearbies = useSelector((state) => state?.detailSlice?.nearbies);
  const detailStatus = useSelector((state) => state.detailSlice.status);
  const nearbieStatus = useSelector((state) => state.detailSlice.nearbieStatus);
  const detailError = useSelector((state) => state.detailSlice.error);
  const index = favorites?.findIndex((e) => e.listingId === id);
  useEffect(() => {
    dispatch(fetchDetail(id));
    dispatch(fetchNearbies(id));
  }, [id]);
  const parser = new DOMParser();
  const navigate = useNavigate();
  console.log(propDetail);
  console.log(detailStatus);
  console.log(detailError);
  console.log(nearbies);
  console.log(nearbieStatus);

  return detailStatus === "pending" ? (
    <Loader />
  ) : Object.keys(propDetail).length > 0 ? (
    <div className="w-full h-fit flex-1 grid grid-cols-1 mx:grid-cols-[530px_320px] justify-center p-2.5 mx-auto gap-2.5">
      <div className="mx:col-span-2">
        <button
          onClick={() => navigate(-1)}
          className="w-fit h-fit flex flex-nowrap gap-1 items-center justify-start text-white font-bold font-[Karla] bg-red-500 rounded-md px-2.5 py-1.5 cursor-pointer"
        >
          <ChevronLeft size={20} /> Back
        </button>
      </div>
      <div className="slickImg w-full max-h-[360px] h-fit rounded-md overflow-hidden">
        <Slider>
          {propDetail.propertyImage && propDetail.propertyImage.length > 0
            ? propDetail.propertyImage.map((e, i) => (
                <img key={i} src={e.original} alt="PropImg" />
              ))
            : null}
        </Slider>
      </div>
      <div className="w-full h-full max-h-[360px] flex flex-col order-1 mx:order-0 p-1">
        <CntFrame />
      </div>
      <div className="grid grid-cols-1 items-start w-fit h-fit">
        <div className="w-full h-fit ">
          <h1 className="text-3xl font-bold font-[karla] text-indigo-400 text-left capitalize">
            {propDetail.title}
          </h1>
          <h4 className="text-2xl font-bold font-[Karla] text-indigo-950 underline mb-1">
            {propDetail?.pricing?.label}
          </h4>
          <div className="w-full h-fit flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
            <div className="w-fit h-fit flex flex-nowrap items-center gap-2.5 font-[Karla] text-indigo-400">
              {propDetail?.featurePreview?.map((e) => (
                <div className="w-fit h-fit flex flex-nowrap gap-1 items-center bg-white rounded-md p-2 drop-shadow-md drop-shadow-indigo-400">
                  {Icons[`${e.iconId}`]}
                  {e?.content}
                  {e?.iconId}
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                dispatch(addRemoveFavorite({ listingId: id, ...propDetail }));
                notify(index);
              }}
              className="w-fit h-fit flex flex-nowrap gap-1 items-center justify-between px-2.5 py-1.5 rounded-sm text-white bg-indigo-400 cursor-pointer"
            >
              <Bookmark
                size={20}
                fill={index !== -1 ? `#fff085` : "transparent"}
                className="text-yellow-200"
              />{" "}
              {index !== -1 ? "Remove" : "Save"}
            </button>
          </div>
          <div className="w-full h-fit flex flex-nowrap items-center gap-2.5 my-2.5">
            <h4 className="text-xs font-medium font-[Karla] bg-white rounded-full px-1.5 py-1 drop-shadow-xs drop-shadow-indigo-500">
              {propDetail?.category}
            </h4>
            <h4 className="text-xs font-medium font-[Karla] bg-white rounded-full px-1.5 py-1 drop-shadow-xs drop-shadow-indigo-500">
              Available from: {propDetail?.publishedOn?.split("T")[0]}
            </h4>
            <h4 className="text-xs font-medium font-[Karla] bg-white rounded-full px-1.5 py-1 drop-shadow-xs drop-shadow-indigo-500">
              {propDetail?.publicationStatus}
            </h4>
          </div>
        </div>
        <div className="w-full h-fit grid">
          <h4 className="font-bold text-2xl font-[Karla] text-indigo-500">
            About this Property:
          </h4>
          <div className="flex flex-col w-fit h-fit justify-start items-start">
            {propDetail?.features?.bullets?.map((e) => (
              <div className="w-fit h-fit grid grid-cols-[20px_1fr] gap-1 justify-start text-[#333] font-[Karla] font-medium">
                <Check size={20} className="text-green-500" />{" "}
                <p className="text-sm">{e}</p>
              </div>
            ))}
          </div>
          <h4 className="text-2xl font-bold text-indigo-500 font-[Karla]">
            Description:
          </h4>
          <p className="font-[Karla] font-medium text-black">
            <ReadMore
              detail={
                parser.parseFromString(
                  propDetail.detailedDescription,
                  "text/html"
                ).body.textContent
              }
            />
          </p>
          <br />
        </div>
      </div>

      <div className="w-full h-fit flex flex-col p-1">
        <div className="w-full h-full flex flex-col items-start justify-start">
          <h2 className="font-bold text-2xl font-[Karla] text-indigo-500">
            Publisher:
          </h2>

          <div className="w-full h-fit flex flex-nowrap items-center justify-start gap-2.5">
            <div className="w-fit h-fit overflow-hidden">
              <img
                className="max-w-20 h-fit"
                src={propDetail?.branch?.logoUrl}
                alt={propDetail?.branch?.name}
              />
            </div>
            <div className="w-fit h-fit flex flex-col items-start justify-center">
              <h5 className="text-lg font-bold text-violet-950 font-[Karla]">
                {propDetail?.branch?.name.includes("-")
                  ? propDetail?.branch?.name.split("-").join("")
                  : propDetail?.branch?.name}
              </h5>
              <h6 className="text-base font-medium text-gray-800 font-[Karla]">
                Member:{propDetail?.branch?.memberType}
              </h6>
              <p className="text-sm font-normal font-[Karla] text-gray-500">
                Contact:{" "}
                {propDetail?.branch?.phone && (
                  <span className="text-indigo-500">
                    Phone:{" "}
                    <a
                      className="underline"
                      href={`tel:${propDetail?.branch?.phone}`}
                    >
                      {propDetail?.branch?.phone}
                    </a>
                  </span>
                )}{" "}
              </p>
            </div>
          </div>
        </div>
        {nearbieStatus === "pending" ? (
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
            </div>
          </div>
        ) : nearbieStatus === "rejected" ? null : (
          <>
            {" "}
            <h2 className="text-2xl font-bold font-[Karla] text-indigo-800">
              Nearest Destinations:
            </h2>
            <div className="w-full h-fit flex flex-col gap-2">
              <Accordian nearbies={nearbies?.points_of_interest[`${id}`]} />
            </div>
          </>
        )}
      </div>
    </div>
  ) : (
    <div className="w-full h-fit flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="w-fit h-fit flex flex-nowrap gap-1 items-center justify-start text-white font-bold font-[Karla] bg-red-500 rounded-md px-2.5 py-1.5 cursor-pointer"
      >
        <ChevronLeft size={20} /> Back
      </button>
      <h2 className="w-fit text-xl text-center sm:text-3xl font-bold font-[Poppins]">
        Failed to load property details. Please try again later!
      </h2>
      <img className="w-80" src="/src/assets/warning.webp" alt="ErrorPng" />
    </div>
  );
}
