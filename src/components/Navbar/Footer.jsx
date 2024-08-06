import { Home, Info } from "@mui/icons-material";
import { Link } from "react-scroll";
export default function Footer() {
  return (
    <>
    <main className=" fixed  flex items-center justify-center gap-3  " >
       <Link to="home" smooth={true}><Home /></Link>
       <Link to="aboutweb" smooth={true}><Info /></Link>
    </main>
    </>
  )
}

