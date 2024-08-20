import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { MaterialUISwitch } from "../switch/Switch";
import { DarkContext } from "../../App";

const Sidebar = ({ closeSidebar }) => {
  const {darkMode , setDarkMode } = useContext(DarkContext)
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");

    if (sidebar) {
      document.documentElement.addEventListener("touchstart", closeSidebar);
      sidebar.addEventListener("touchstart", (e) => {
        e.stopPropagation();
      });
    }
  }, [closeSidebar]);
  return (
    <Box
      id="sidebar"
      component="div"
      sx={{
        display: { md: "none", sm: "block" },
        position: "fixed",
        left: 0,
        top: 0,
        width: "250px",
        height: "100vh",
        zIndex: 1300,
        fontFamily: "Montserrat",
        opacity: 1,
        transition: "all 0.3s ease-in-out",
      }}
      className="sidebar bg-[#ffff89] dark:bg-[#181818]"
    >
      <Box
        component={"div"}
        className="w-full flex items-center justify-start "
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "18px",
            fontWeight: 550,
            pt: 3,
            pl: 3,
          }}
        >
          Sreyas B Anand
        </Typography>
      </Box>

      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          textDecoration: "none",
          fontFamily: "Montserrat",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 3,
            pt: 3,
            gap: 2.5,
          }}
          className=""
        >
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/MyProjects">My Projects</Link>
          <Link to="/Contact">Contact</Link>
          <Link
            to="https://github.com/sreyas-b-anand"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </Box>

        <Box
          component="div"
          sx={{
            position: "fixed",
            bottom: "5%",
            pl: 3,
            gap: 3,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
             <MaterialUISwitch checked={darkMode?true : false}
              onChange={()=>{
               setDarkMode(!darkMode)
              }} />
         
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
