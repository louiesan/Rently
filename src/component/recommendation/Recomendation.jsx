import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuy, fetchRent } from "../../store/rent&buy/dataSlice";
import Loader from "../loader/Loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropsCard from "../propscard/PropsCard";
export default function Recomendation() {
  const dispatch = useDispatch();
  const rNbStatus = useSelector((state) => state.dataSlice.status);
  const userSearchProp = useSelector((state) => state.dataSlice.properties);
  const propertyForRent = useSelector((state) => state.dataSlice.forRent);
  const propertyForSale = useSelector((state) => state.dataSlice.forSale);
  var settings = {
    dots: window.innerWidth >= 640 ? false : true,
    arrows: true,
    infinite: true,
    speed: 1000,
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow:
      window.innerWidth >= 400 && window.innerWidth < 648
        ? 2
        : window.innerWidth >= 648 && window.innerWidth < 768
        ? 3
        : window.innerWidth >= 768
        ? 4
        : 1,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  useEffect(() => {
    if (
      (userSearchProp && userSearchProp.length > 0) ||
      (propertyForRent.length > 0 && propertyForSale.length > 0)
    ) {
      console.log("returning");
      return;
    }
    dispatch(fetchBuy());
    dispatch(fetchRent());
  }, []);

  return rNbStatus === "pending" ? (
    <Loader />
  ) : (propertyForSale && propertyForSale.length > 0) ||
    (propertyForRent && propertyForRent.length > 0) ? (
    <div className="w-full h-full flex flex-col items-center justify-center my-2.5">
      <h2 className="text-3xl font-medium font-[Poppins] self-start">
        Discover More For Sale:
      </h2>
      <div className="container overflow-hidden mx-auto my-2.5">
        <Slider {...settings}>
          {propertyForSale && propertyForSale.length > 0 ? (
            propertyForSale.map((e) => (
              <PropsCard props={e} type={"for-sale"} />
            ))
          ) : (
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
              </div>
            </div>
          )}
        </Slider>
      </div>
      <h2 className="text-3xl font-medium font-[Poppins] self-start">
        Discover More For Rent:
      </h2>
      <div className="container overflow-hidden mx-auto my-2.5">
        <Slider {...settings}>
          {propertyForRent && propertyForRent.length > 0 ? (
            propertyForRent.map((e) => <PropsCard props={e} type={"to-rent"} />)
          ) : (
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 my-5">
      <h2 className="text-2xl font-medium font-[Poppins] text-indigo-500">
        No Recommendations Available at the Moment.
      </h2>
      <img src="../assets/problem.webp" alt="No Recommendations" />
    </div>
  );
}
