import { Leaf } from "lucide-react";
import { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch, setType } from "../../store/userSearch/searchSlice";
import { useNavigate } from "react-router";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userSearch, setUserSearch] = useState("");
  const [realType, setRealType] = useState("for-sale");
  const [placeholder, setPlaceHolder] = useState("Please Enter a Location...");

  function hundleSubmit() {
    if (userSearch.trim() === "" || userSearch.length < 3) {
      setPlaceHolder("Empty Text!");
    } else {
      navigate("/properties");
      dispatch(fetchSearch({ city: userSearch, type: realType }));
      dispatch(setType(realType));
      setPlaceHolder("Please Enter a Location...");
    }
  }

  console.log(userSearch);

  return (
    <div className="w-full h-fit">
      <div
        className={`relative z-0  w-fit h-fit flex bg-[#eee] before:absolute before:bg-white before:w-24 before:h-12 before:rounded-t-md before:z-[-1] before:transition-all before:duration-300 before:ease-in-out ${
          realType === "for-sale" ? "before:left-0" : "before:left-1/2"
        }`}
      >
        <button
          onClick={() => setRealType("for-sale")}
          className="cursor-pointer w-24 h-12 text-xl font-bold text-emerald-400 font-[Poppins] px-2 py-1 rounded-t-md"
        >
          Buy
        </button>
        <button
          onClick={() => setRealType("to-rent")}
          className="cursor-pointer w-24 h-12 text-xl font-bold text-emerald-400 font-[Poppins] px-2 py-1 rounded-t-md"
        >
          Rent
        </button>
      </div>
      <div className="relative w-full h-fit bg-white rounded-tr-md">
        <input
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          className="w-full h-10 pl-1 p-2 rounded-md outline-none font-[Poppins] font-medium placeholder:font-[Poppins] placeholder:font-medium"
          type="text"
          name="search"
          id="search"
          placeholder={placeholder}
        />
        <button
          onClick={hundleSubmit}
          className="absolute top-0 right-0 w-20 h-10 bg-green-500 rounded-tr-lg font-[Poppins] text-base text-white cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
}
