import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/w500/${
          data.poster_path || data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full h-[50vh] flex flex-col justify-end p-[5%] text-white items-start "
    >
      <h1 className="w-[70%] font-black text-5xl ">
        {data.original_title || data.name || data.original_name || data.title}
      </h1>
      <p className="w-[60%] mt-5 text-sm  ">
        {data.overview.slice(0, 200)}
        <Link className="text-blue-300  font-semibold text-[2vh] "> ...more</Link>
      </p>
      <p className="mt-3 font-semibold">
        <i className="ri-megaphone-fill text-yellow-500 mr-1"></i>{data.release_date || "No information"}
        <i className="ri-album-fill text-yellow-500 ml-5 mr-1"></i>{data.media_type.toUpperCase() || "No information"}
      </p>
      <Link className="bg-[#6556CD] px-4 py-2 mt-10 rounded font-semibold">Watch trailer</Link>
    </div>
  );
};

export default Header;
