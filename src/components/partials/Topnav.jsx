import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "../../../public/noimage.png";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.log("ERROR :", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[20vw] ">
      <i className="text-[#6556CD] text-3xl ri-search-line"></i>
      <input
        type="text"
        placeholder="Search anything"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="text-zinc-200 mx-5 w-[30vw] outline-none border-b-[1px] border-zinc-600 p-2 bg-transparent text-xl"
      />
      {query.length > 0 && (
        <i
          className="text-zinc-400 text-3xl ri-close-line cursor-pointer"
          onClick={() => setQuery("")}
        ></i>
      )}

      <div className="absolute top-[100%]  w-[50%] max-h-[50vh]  bg-zinc-200 overflow-auto rounded">
        {search.map((s, i) => (
          <Link
            key={i}
            className="hover:bg-zinc-300 hover:text-black w-[100%] flex justify-start items-center p-2 border-b-2 border-zinc-100 text-zinc-600 font-semibold"
          >
            <img
              src={
                s.poster_path || s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${
                      s.poster_path || s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
              className="w-[10vh] h-[10vh] object-cover rounded mr-5"
            />
            <span>
              {s.original_title || s.name || s.original_name || s.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
