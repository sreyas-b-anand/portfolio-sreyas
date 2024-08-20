
//components
import ResponsiveAppBar from "../components/Navbar/Navbar";
import TechSection from "../components/cards/Card";

//mui
import { Box, IconButton, Link, Typography } from "@mui/material";
//assets
import photo from "../assets/me/photo.jpg";
//icons
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Footer from "../components/Footer/Footer";

function Home() {
  const icons = [
    { href: "https://github.com/sreyas-b-anand", icon: FiGithub },
    { href: "https://www.linkedin.com/in/sreyas-b-anand", icon: FaLinkedin },
    { href: "mailto:sreyas1045@gmail.com", icon: HiOutlineMail },
  ];
  return (
    <>
      <div className="h-fit w-screen bg-bg dark:bg-bg_dark z-0">
        <div
          id="home"
          className="w-screen h-screen bg-bg text-primary dark:bg-bg_dark dark:text-text_primary z-0"
        >
          <ResponsiveAppBar />

          <main className="w-screen flex flex-wrap items-center justify-center h-[30rem] -z-10 flex-col gap-5 text-primary dark:bg-bg_dark dark:text-text_primary z-0">
            <Box sx={{ height: 140, width: 140, borderRadius: "50%" }}>
              <img
                className="rounded-[50%] border-2  p-1 "
                src={photo}
                alt="img"
              />
            </Box>
            <Box className="w-screen flex  justify-center items-center flex-col dark:bg-bg_dark z-0">
              <div className="px-8 py-4 flex flex-wrap justify-center flex-col items-center rounded-[10px] m-4 z-0">
                <Typography
                  className="text-[#ffdd31] dark:text-text_primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { md: 3, xs: 2 },
                    fontFamily: "montserrat",
                    fontSize: { md: "50px", xs: "20px" },
                    fontWeight: 700,
                  }}
                >
                  Hi , I'm{" "}
                  <p className="text-primary dark:text-cyan-400">
                    Sreyas B Anand
                  </p>
                </Typography>
                <Typography
                  className="text-secondary"
                  sx={{
                    fontFamily: "montserrat",
                    fontSize: { md: "25px", xs: "16px" },
                  }}
                >
                  I am a Frontend Devolper
                </Typography>
              </div>
            </Box>
            <Box className="w-64 flex items-center justify-center bg-[#ffdd31] dark:bg-gray-600 rounded gap-3 mt-9">
              {icons.map((icon, index) => {
                return (
                  <Link
                    key={index}
                    className="hover:brightness-200 p-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={icon.href}
                  >
                    <IconButton>
                      <icon.icon
                        color="white"
                        className="transition-all duration-[0.5s] ease-in-out hover:scale-[1.3]"
                      />
                    </IconButton>
                  </Link>
                );
              })}
            </Box>
          </main>
        </div>
        <div
          id="aboutweb"
          className="w-screen h-screen m-0 bg-bg  text-primary dark:bg-bg_dark dark:text-text_primary"
        >
          <TechSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
