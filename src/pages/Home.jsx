//components
import ResponsiveAppBar from "../components/Navbar/Navbar";
//ui
import { Box, IconButton, Link, Typography } from "@mui/material";
//assets
import photo from "../assets/me/photo.jpg";
//icons
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import TechSection from "../components/cards/Card";
import Footer from "../components/Navbar/Footer";


function Home() {
  const icons = [
    { href: "https://github.com/sreyas-b-anand", icon: FiGithub },
    { href: "https://www.linkedin.com/in/sreyas-b-anand", icon: FaLinkedin },
    { href: "mailto:sreyas1045@gmail.com", icon: HiOutlineMail },
  ];
  return (
    <>
      <div id="home" className="w-screen h-screen bg-[#1E1E1E] text-primary ">
        <ResponsiveAppBar />
        <main className="w-screen flex flex-wrap items-center justify-center h-[30rem] flex-col gap-5 ">
          <Box sx={{ height: 140, width: 140, borderRadius: "50%" }}>
            <img className="rounded-[50%] border-2 border-cyan-400 shadow-[0_0_5px_4px_cyan] p-1 " src={photo} alt="img" />
          </Box>
          <Box className="w-screen flex  justify-center items-center flex-col ">
            <div className="border border-gray-500 px-8 py-4 flex flex-wrap justify-center flex-col items-center rounded-[10px] m-4">
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { md: 3, xs: 2 },
                  fontFamily: "montserrat",
                  fontSize: { md: "50px", xs: "20px" },
                  fontWeight: 700,
                }}
              >
                Hii , I'm <p className="text-cyan-400 ">Sreyas B Anand</p>
              </Typography>
              <Typography
                className="text-gray-400"
                sx={{
                  fontFamily: "montserrat",
                  fontSize: { md: "25px", xs: "16px" },
                }}
              >
                I am a Frontend Devolper
              </Typography>
            </div>
          </Box>
          <Box className="w-64 flex items-center justify-center bg-gray-500 rounded gap-3 mt-9">
            {icons.map((icon) => {
              return (
                <Link
                  className="hover:brightness-200 "
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.href}
                >
                  <IconButton>
                    <icon.icon />
                  </IconButton>
                </Link>
              );
            })}
          </Box>
        
        </main>
        <Box component={'div'}
        className="w-screen h-[200px] flex items-center justify-center absolute z-20"
         >
          <Footer/>
         </Box>
      </div>
      <div id="aboutweb" className="w-screen h-screen m-0">
        <TechSection />
      </div>
    </>
  );
}

export default Home;
