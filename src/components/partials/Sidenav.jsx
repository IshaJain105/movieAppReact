import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="h-full w-[18vw] border-r-2 border-zinc-600 p-10 ">
      <h1 className="text-3xl">
        <i className="text-[#6556CD] ri-movie-2-line "></i>
        <span className="text-white text-2xl ml-4 ">MovieApp.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl">
        <h1 className="text-white text-2xl font-semibold mt-10 mb-5 ">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-3 ri-fire-fill"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-3 ri-bard-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-3 ri-tv-fill"></i>TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-3 ri-film-fill"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-3 ri-team-fill"></i>People
        </Link>
      </nav>
      <hr className="border-none bg-zinc-600 h-[2px] mt-5" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white text-2xl font-semibold mt-8 mb-3 ">
          Website Info.
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 px-5 py-3 rounded-lg">
          <i className="ri-information-2-fill mr-3"></i>About MovieApp
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 px-5 py-3 rounded-lg">
          <i className="ri-phone-fill mr-3"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
