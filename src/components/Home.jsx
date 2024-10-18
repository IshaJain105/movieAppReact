import { useEffect, useState } from "react";
import Header from "./partials/Header";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import HorizontalCard from "./partials/HorizontalCard";
import Dropdown from "./partials/Dropdown";

const Home = () => {
  document.title = "MovieApp | HomePage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const getwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setwallpaper(
        data.results[(Math.random() * data.results.length).toFixed()]
      );
    } catch (error) {
      console.log("ERROR :" + error);
    }
  };

  const gettrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("ERROR :" + error);
    }
  };

  useEffect(() => {
    gettrending();
    !wallpaper && getwallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="h-full w-[82vw]  overflow-auto">
        <Topnav />
        <Header data={wallpaper} />
        <div className="p-5 flex items-center justify-between ">
          <h1 className="text-zinc-400 font-semibold text-3xl">Trending</h1>
          <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setcategory(e.target.value)} />
        </div>
        <HorizontalCard data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;
