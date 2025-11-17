import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loader from "../../component/loader/Loader";
import apartement from "../../assets/apartement.webp";
import condo from "../../assets/condo.webp";
import singleFhome from "../../assets/singleFhome.webp";
import townhome from "../../assets/townhome.webp";
export default function Article() {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [Loading, setLoading] = useState(false);
  const index = articles?.findIndex((e) => e.id == id);
  console.log(index);
  const imgArr = [townhome, apartement, singleFhome, condo];
  useEffect(() => {
    async function fetchArticle() {
      try {
        setLoading(true);
        const res = await fetch("/article.json");
        if (!res.ok) throw new Error("ERROR OCCURED!");
        const json = await res.json();
        console.log(json);
        setArticles(json.articles || []);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, []);
  console.log(articles);
  if (Loading) return <Loader />;
  return articles && articles.length > 0 ? (
    <div className="w-full h-fit grid grid-cols-1 p-2.5 flex-1">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-4xl font-bold text-indigo-950 font-[Karla] underline my-2">
          {articles[index]?.title}
        </h1>
        <div className="flex flex-wrap md:flex-nowrap gap-2.5">
          <img
            className="w-full md:max-w-1/2 max-h-80 rounded-md"
            src={imgArr[index]}
            alt="Article_Image"
          />
          <div className="flex flex-col w-full h-fit">
            <p className="text-xl font-[Karla] font-normal text-gray-950">
              {articles[index].content}
              <span className="text-indigo-600"> Excerpt:</span>
              {articles[index]?.excerpt}
            </p>
            <div className="flex flex-col items-start justify-start">
              <h4 className="text-lg font-[Karla] font-medium text-indigo-500">
                Author: {articles[index]?.author}
              </h4>
              <h4 className="text-lg font-[Karla] font-medium text-indigo-500">
                Published on :{articles[index]?.date}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-1">
        <h2 className="text-2xl font-[Karla] font-bold text-indigo-950">
          Read More :
        </h2>
        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {articles.map((e) => (
            <div className="w-full h-fit relative bg-white rounded-md p-2.5 flex flex-col items-center justify-center my-5">
              <img
                className="w-full h-40 rounded-md relative drop-shadow-lg drop-shadow-black -top-5"
                src={e.image}
                alt="Article_Image"
              />
              <h1 className="text-lg font-[Karla] font-bold text-indigo-900">
                {e.category}
              </h1>
              {e.id == id ? (
                <p className="w-full h-10 flex justify-center items-center font-bold font-[Karla] relative rounded-md bg-white z-0 drop-shadow-sm drop-shadow-black before:absolute before:left-0 before:top-0  before:w-full before:bg-green-400 before:z-[-1] before:h-full text-white before:transition-all before:duration-300 before:ease-in-out before:rounded-md cursor-not-allowed">
                  You're Reading This
                </p>
              ) : (
                <Link
                  to={`/article/${e.id}`}
                  className="w-full h-10 flex justify-center items-center font-bold font-[Karla] relative rounded-md bg-white z-0 drop-shadow-sm drop-shadow-black before:absolute before:left-0 before:top-0  before:w-0 hover:before:w-full before:bg-indigo-400 before:z-[-1] before:h-full hover:text-white before:transition-all before:duration-300 before:ease-in-out before:rounded-md cursor-pointer"
                >
                  Read More
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
