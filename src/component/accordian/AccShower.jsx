import { Icons } from "../../pages/detail/Detail";

export default function AccShower({ object, icon, isSelected }) {
  const arrObject = Object.keys(object);
  const style = {
    display: isSelected ? "flex" : "none",
  };

  return (
    <div style={style} className="w-full bg-white flex-col">
      {arrObject.map((e) => (
        <div className="w-full h-fit flex flex-nowrap gap-1 p-1 items-center justify-start text-[#372aac]">
          {Icons[icon]}
          {
            <div className="w-fit h-fit">
              <h4 className=" font-bold font-[Karla] text-indigo-800 text-base">
                {e.split("-")[0].trim()}
              </h4>
              <p className="text-xs text-gray-500 font-normal font-[Karla]">
                lang: {object[e]?.lng} - lat: {object[e]?.lat} - dist:{" "}
                {object[e]?.dist}
              </p>
            </div>
          }
        </div>
      ))}
    </div>
  );
}
