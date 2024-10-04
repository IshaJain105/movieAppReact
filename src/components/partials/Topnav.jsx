import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[15vw] ">
      <i class="text-[#6556CD] text-3xl ri-search-line"></i>
      <input
        type="text"
        placeholder="Search anything"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="text-zinc-200 mx-5 w-[30vw] outline-none border-b-[1px] border-zinc-600 p-2 bg-transparent text-xl"
      />
      {query.length > 0 && (
        <i
          class="text-zinc-400 text-3xl ri-close-line"
          onClick={() => setQuery("")}
        ></i>
      )}

      <div className="absolute top-[100%] w-[50%] max-h-[50vh]  bg-zinc-200 overflow-auto rounded">
        {/* <Link className="hover:bg-zinc-300 hover:text-black w-[100%] flex justify-start items-center p-5 border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Items</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
