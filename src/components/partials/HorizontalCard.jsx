import React from "react";
import Dropdown from "./Dropdown";

const HorizontalCard = ({ data }) => {
  return (
      
      <div className="w-[100%] h-[45vh] flex overflow-y-hidden  text-white px-5">
        {data.map((d, i) => (
          <div key={i} className="min-w-[13vw] rounded bg-zinc-900 mr-5 mb-5 overflow-hidden">
            <img
              className="w-full h-[60%] object-cover"
              src={`https://image.tmdb.org/t/p/w500/${
                d.poster_path || d.backdrop_path
              }`}
              alt=""
            />
            <div className="p-3 h-[40%]">
              <h1 className=" font-semibold text-xl ">
                {d.original_title || d.name || d.original_name || d.title}
              </h1>
              <p className="mt-3">
                {d.overview.slice(0, 50)}
                <span className="text-blue-300  font-semibold text-[2vh] ">
                  {" "}
                  ...more
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default HorizontalCard;
