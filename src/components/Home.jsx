import Sidenav from "./partials/Sidenav"
import Topnav from "./partials/Topnav"

const Home = () => {
    document.title="React | HomePage"
  return (
    <>
        <Sidenav/>
        <div className="h-full w-[80vw] ">
            <Topnav/>
        </div>
    </>
  )
}

export default Home