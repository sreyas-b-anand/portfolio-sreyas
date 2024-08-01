import ResponsiveAppBar from "../components/Navbar/Navbar";
import { Box, IconButton, Link, Typography } from "@mui/material";
import photo from "../assets/me/photo.jpg";
//icons
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
function Home() {
  const icons = [
    { href: "https://github.com/sreyas-b-anand", icon: FiGithub },
    { href: "https://www.linkedin.com/in/sreyas-b-anand", icon: FaLinkedin },
    { href: "mailto:sreyas1045@gmail.com", icon: HiOutlineMail },
  ];
  return (
    <>
      <div className="w-screen h-screen bg-[#1E1E1E] text-primary ">
        <ResponsiveAppBar />
        <main className="w-screen flex flex-wrap items-center justify-center h-[30rem] flex-col gap-5 ">
          <Box sx={{ height: 140, width: 140, borderRadius: "50%" }}>
            <img className="rounded-[50%]" src={photo} alt="img" />
          </Box>
          <Box className="w-screen flex  justify-center items-center flex-col ">
            <div className="border border-gray-500 px-8 py-4 flex flex-wrap justify-center flex-col items-center rounded-[10px]">
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { md: 3, xs: 2 },
                  fontFamily: "montserrat",
                  fontSize: { md: "50px", xs: "22px" },
                  fontWeight: 700,
                }}
              >
                Hii , I'm <p className="text-blue-600">Sreyas B Anand</p>
              </Typography>
              <Typography
                className="text-gray-400"
                sx={{
                  fontFamily: "montserrat",
                  fontSize: { md: "25px", xs: "18px" },
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
      </div>
    </>
  );
}

export default Home;
