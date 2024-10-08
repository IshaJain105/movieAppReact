import { useEffect, useState } from "react";
import Header from "./partials/Header";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";

const Home = () => {
  document.title = "MovieApp | HomePage";
  const [wallpaper, setwallpaper] = useState(null);
  const getwallpaper = async () => {
    try {
      const {data} = await axios.get(
        `/trending/all/day`
      );
      setwallpaper(data.results[(Math.random()*data.results.length).toFixed()])
    } catch (error) {
      console.log("ERROR :" + error);
    }
  };

  useEffect(()=>{
    getwallpaper();
  },[])

  return wallpaper ? (
    <>
      <Sidenav />
      <div className="h-full w-[82vw] ">
        <Topnav />
        <Header data={wallpaper}/>
      </div>
    </>
  ) : <h1>Loading</h1>
};

export default Home;
