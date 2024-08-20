import { Home, Info } from "@mui/icons-material";
import { Link } from "react-scroll";

export default function HomeInfo() {
  return (
    <>
      <main className=" fixed  flex items-center justify-center gap-3  ">
        <Link
          to="home"
          smooth={true}
          className="px-1 transform-all ease-in-out duration-[0.4s] hover:scale-[1.3] cursor-pointer hover:shadow-[0_0_4px_1px_white]"
        >
          <Home />
        </Link>
        <Link
          to="aboutweb"
          smooth={true}
          className="px-1 transform-all ease-in-out duration-[0.4s] hover:scale-[1.3] cursor-pointer  hover:shadow-[0_0_4px_1px_white]"
        >
          <Info />
        </Link>
        
      </main>
    </>
  );
}
