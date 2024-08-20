import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

// router
import { Link, useHref } from "react-router-dom";

// context
import { DarkContext } from "../../App";

// assets
import git from "../../assets/socialimg/git.jpg";
import Sidebar from "./Sidebar";

const pages = [
  { id: 1, link: "Home", href: "/" },
  { id: 2, link: "About", href: "/about" },
  { id: 3, link: "My Projects", href: "/myprojects" },
  { id: 4, link: "Contact", href: "/contact" },
];

function ResponsiveAppBar() {
  const { darkMode, setDarkMode } = useContext(DarkContext);
  const pathName = useHref();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [display, setDisplay] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        className="bg-[#fefce8] text-primary font-medium shadow-sm"
      >
        <Container
          maxWidth="xl"
          className="bg-[#fefce8] text-primary dark:bg-bg_navbar dark:text-text_primary dark:font-normal"
        >
          <Toolbar disableGutters className="bg-navbar">
            <Typography
              className="text-white"
              variant="h6"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                fontFamily: "montserrat",
              }}
            >
              SREYAS B ANAND
            </Typography>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleSidebar}
                color="white"
              >
                <MenuIcon color="white" />
              </IconButton>
            </Box>

            <Typography
              className="text-white"
              variant="h5"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 600,
                color: "inherit",
                textDecoration: "none",
                fontFamily: "montserrat",
                pl: 1,
                letterSpacing: "0.1rem",
              }}
            >
              SREYAS B ANAND
            </Typography>

            <Box
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: 2,
                pl: 4,
                fontFamily: "montserrat",
              }}
            >
              {pages.map((page) => {
                const isActive = pathName.endsWith(page.href);
                return (
                  <Link
                    className={
                      isActive
                        ? "opacity-[1] hover:opacity-100"
                        : "opacity-[0.6] hover:opacity-100"
                    }
                    to={page.href}
                    key={page.id}
                    sx={{ my: 2, display: "block" }}
                  >
                    {page.link}
                  </Link>
                );
              })}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  gap: 1,
                  fontSize:'14px'
                }}
              >
                {darkMode ? "Light Mode?" : "Dark Mode?"}
                {display && (
                  <Button
                    sx={{ textDecoration: "none" }}
                    className={`transition duration-300 ease-in-out px-4 py-2 font-normal rounded-md text-primary dark:text-text_primary ${
                      darkMode
                        ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                        : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                    }`}
                    onClick={() => {
                      setDarkMode(true);
                      setDisplay(false);
                    }}
                  >
                    Click Here
                  </Button>
                )}
                {!display && (
                  <Button
                    className={`transition duration-300 ease-in-out px-4 py-2 font-normal  rounded-md ${
                      darkMode
                        ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                        : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                    }`}
                    onClick={() => {
                      setDarkMode(false);
                      setDisplay(true);
                    }}
                  >
                    Click Here
                  </Button>
                )}
              </Box>
              <Box
                sx={{
                  height: "100%",
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={"https://github.com/sreyas-b-anand"}
                  target="_blank"
                  rel="noopener norefferer"
                  className="border px-1 pr-2 flex items-center justify-center border-gray-500 rounded-[10px] opacity-[70%] hover:opacity-100"
                >
                  <IconButton sx={{ height: 45, width: 45 }}>
                    <img style={{ borderRadius: "50%" }} src={git} alt="git" />
                  </IconButton>{" "}
                  GitHub
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {isSidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}
    </>
  );
}

export default ResponsiveAppBar;
