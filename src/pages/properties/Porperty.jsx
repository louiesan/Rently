import { useEffect } from "react";
import Search from "../../component/searchbar/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuy, fetchRent } from "../../store/rent&buy/dataSlice";
import PropsCard from "../../component/propscard/PropsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Recomendation from "../../component/recommendation/Recomendation";

export default function Property() {
  const dispatch = useDispatch();
  const userSearchProp = useSelector((state) => state.searchSlice.properties);
  const type = useSelector((state) => state.searchSlice.type);
  const searchStatus = useSelector((state) => state.searchSlice.status);
  const searchErr = useSelector((state) => state.searchSlice.error);
  const propertyForRent = useSelector((state) => state.dataSlice.forRent);
  const propertyForSale = useSelector((state) => state.dataSlice.forSale);
  console.log(userSearchProp);
  console.log(propertyForRent);
  console.log(propertyForSale);

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

  return (
    <div className="w-full h-fit">
      <Search />
      {searchErr ? (
        <div className="w-full h-fit flex flex-col items-center">
          <h2 className="w-fit text-xl text-center sm:text-3xl font-bold font-[Poppins]">
            Sorry We have not found what you're looking for!
          </h2>
          <img className="w-80" src="src/assets/problem.webp" alt="NotFound" />
        </div>
      ) : searchStatus === "pending" ? (
        <div className="my-2.5 h-full flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="w-full h-fit">
          {userSearchProp && userSearchProp.length > 0 ? (
            <>
              <h2 className="text-4xl font-[Karla] font-bold text-indigo-800">
                Search Results:
              </h2>
              <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2.5 items-center justify-center">
                {userSearchProp.map((e) => (
                  <PropsCard props={e} type={type} />
                ))}
              </div>
            </>
          ) : (
            <Recomendation />
          )}
        </div>
      )}
    </div>
  );
}

// <div className="w-full h-full flex flex-col items-center justify-center my-2.5">
//   <h2 className="text-3xl font-medium font-[Poppins] self-start">
//     Discover More For Sale:
//   </h2>
//   <div className="container overflow-hidden mx-auto my-2.5">
//     <Slider {...settings}>
//       {propertyForSale &&
//         propertyForSale.length > 0 &&
//         propertyForSale.map((e) => (
//           <PropsCard props={e} type={"for-sale"} />
//         ))}
//     </Slider>
//   </div>
//   <h2 className="text-3xl font-medium font-[Poppins] self-start">
//     Discover More For Rent:
//   </h2>
//   <div className="container overflow-hidden mx-auto my-2.5">
//     <Slider {...settings}>
//       {propertyForRent &&
//         propertyForRent.length > 0 &&
//         propertyForRent.map((e) => (
//           <PropsCard props={e} type={"to-rent"} />
//         ))}
//     </Slider>
//   </div>
// </div>
