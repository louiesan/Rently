import safe from "../../assets/encrypted.webp";
import money from "../../assets/money.webp";
import speed from "../../assets/action.webp";
import bookmark from "../../assets/bookmark.webp";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function About() {
  const dummyOffre = [
    {
      title: "Safe Convos",
      icon: safe,
      content: "Safe Conversation & Trusted Sellers",
    },
    {
      title: "No taxes",
      icon: money,
      content: "We don't charge any extra fees or taxes",
    },
    {
      title: "Fast Service",
      icon: speed,
      content: "Quick Responses & 24/7 Support",
    },
    {
      title: "Bookmark Listings",
      icon: bookmark,
      content: "Save your favorite listings for easy access later",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [articles, setArticle] = useState(null);
  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        const res = await fetch("/public/article.json");
        if (!res.ok) throw new Error("Error has Occured");
        const json = await res.json();
        setArticle(json.articles || []);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);
  return (
    <div className="w-full h-fit flex flex-col items-start justify-start flex-1">
      <h1 className="text-2xl font-bold font-[Poppins] text-indigo-950 underline">
        Who We Are?
      </h1>
      <p className="text-xl font-medium pl-2.5 font-[Karla] text-indigo-800">
        At Rently, we make finding your next home effortless and enjoyable.
        Whether you’re searching for an apartment in the city, a cozy family
        house, or a modern condo, our platform brings you real listings with
        clear details and beautiful visuals — all in one place. Our goal is to
        simplify the rental journey by connecting you with the right property
        faster and smarter.
      </p>
      <h2 className="text-2xl font-bold font-[Poppins] text-indigo-950 underline mb-2.5">
        What we offre:
      </h2>
      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
        {dummyOffre.map((e, i) => (
          <div
            key={i}
            className="w-full h-full flex flex-col items-center gap-1 p-2.5 rounded-md bg-white/80 drop-shadow-lg drop-shadow-indigo-200 transition-all duration-300 ease-in-out hover:-translate-y-1.5"
          >
            <img className="w-fit" src={e.icon} alt={e.title} />
            <h4 className="text-xl font-medium text-indigo-400 font-[Karla]">
              {e.title}
            </h4>
            <p className="text-base font-[Karla] font-medium text-gray-600 text-center">
              {e.content}
            </p>
          </div>
        ))}
      </div>
      {loading ? (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
          </div>
        </div>
      ) : (
        articles &&
        articles.length > 0 && (
          <>
            <h2 className="text-2xl font-bold font-[Poppins] text-indigo-950 underline mb-2.5">
              Read our Article:
            </h2>
            <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {articles.map((e) => (
                <div
                  key={e.id}
                  className="w-full h-fit relative bg-white rounded-md p-2.5 flex flex-col items-center justify-center my-5"
                >
                  <img
                    className="w-full h-40 rounded-md relative drop-shadow-lg drop-shadow-black -top-5"
                    src={e.image}
                    alt="Article_Image"
                  />
                  <h1 className="text-lg font-[Karla] font-bold text-indigo-900">
                    {e.category}
                  </h1>

                  <Link
                    to={`/article/${e.id}`}
                    className="w-full h-10 flex justify-center items-center font-bold font-[Karla] relative rounded-md bg-white z-0 drop-shadow-sm drop-shadow-black before:absolute before:left-0 before:top-0  before:w-0 hover:before:w-full before:bg-indigo-400 before:z-[-1] before:h-full hover:text-white before:transition-all before:duration-300 before:ease-in-out before:rounded-md cursor-pointer"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}
