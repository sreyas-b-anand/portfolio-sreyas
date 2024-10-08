import React from "react";
//components
import ResponsiveAppBar from "../components/Navbar/Navbar";
import MyProjectComponent from "../components/projects/MyProjectComponent";

//mui
import { Box, Typography } from "@mui/material";
//assets
import grammrimg from "../assets/projectsimg/grammr.jpg";
import bookFinderimg from "../assets/projectsimg/bookfinder.jpg";
import tic from "../assets/projectsimg/tic.jpg";
import taskerImg from '../assets/projectsimg/tasker.jpg'
function MyProjects() {
  const grammr = {
    header: "Grammr",
    desc: "I have created a simple grammar checker using the Gemini API.",
    gitlink: "https://github.com/sreyas-b-anand/grammr",
    weblink: "https://grammr.vercel.app/",
    id: 1,
    image: grammrimg,
    techStack: ["Next.js", "Gemini API", "Tailwind CSS"],
   
  };

  const tictactoe = {
    header: "Tic-Tac-Toe",
    desc: "I have created a Tic-Tac-Toe game using C++ which runs on a terminal.",
    gitlink: "https://github.com/sreyas-b-anand/tictactoeCpp",
    weblink: "https://github.com/sreyas-b-anand/tictactoeCpp",
    id: 2,
    image: tic,
    techStack: ["C++"],
    
  };

  const bookFinder = {
    header: "Booklib",
    desc: "I have created a simple book finder website using the Google Books API.",
    gitlink: "https://github.com/sreyas-b-anand/book-finder",
    weblink: "https://booklib-sreyas.vercel.app/",
    id: 3,
    image: bookFinderimg,
    techStack: ["React", "Google Books API", "Bootstrap"],
  
  };
const tasker = {
  header: "Tasker",
    desc: "I have created a simple to-do app using MERN stack.",
    gitlink: "https://github.com/sreyas-b-anand/todo-mern",
    weblink: "https://todo-mern-tu07.onrender.com",
    id: 4,
    image: taskerImg,
    techStack: ["MERN", "Chakra UI", "Tailwind CSS"],
    
}
  const projects =  [ tasker ,grammr, tictactoe, bookFinder];

  return (
    <div className="w-screen md:h-screen sm:h-fit bg-bg text-primary dark:bg-bg_dark dark:text-text_primary">
      <ResponsiveAppBar />
      <Typography
        sx={{ fontSize: "20px", fontFamily: "montserrat", fontWeight: 550 }}
        className="text-primary text-center w-screen p-6 mt-3 z-30 dark:text-text_primary"
      >
        My Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          mx: 3,
          pb: 5,
        }}
        className="gap-6 items-center justify-center mt-4"
      >
        {projects.map((project) => {
          return <MyProjectComponent project={project} />;
        })}
      </Box>
    </div>
  );
}

export default MyProjects;
