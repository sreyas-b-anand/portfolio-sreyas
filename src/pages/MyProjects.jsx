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

function MyProjects() {
  const grammr = {
    header: "Grammr",
    desc: "I have created a simple grammar checker using the Gemini API.",
    gitlink: "https://github.com/sreyas-b-anand/grammr",
    weblink: "https://grammr.vercel.app/",
    id: 1,
    image: grammrimg,
    toolsUsed: ["Next.js", "Gemini API", "tailwind CSS"],
    learningOutcome:
      "Improved API integration and real-time functionality with Next.js.",
  };

  const tictactoe = {
    header: "Tic-Tac-Toe",
    desc: "I have created a Tic-Tac-Toe game using C++ which runs on a terminal.",
    gitlink: "https://github.com/sreyas-b-anand/tictactoeCpp",
    weblink: "https://github.com/sreyas-b-anand/tictactoeCpp",
    id: 2,
    image: tic,
    toolsUsed: ["C++"],
    learningOutcome:
      "Refined algorithms and game logic in a command-line environment.",
  };

  const bookFinder = {
    header: "Booklib",
    desc: "I have created a simple book finder website using the Google Books API.",
    gitlink: "https://github.com/sreyas-b-anand/book-finder",
    weblink: "https://booklib-sreyas.vercel.app/",
    id: 3,
    image: bookFinderimg,
    toolsUsed: ["React", "Google Books API", "Bootstrap"],
    learningOutcome:
      "Enhanced skills in working with APIs and dynamic data management in React.",
  };

  const projects = [grammr, tictactoe, bookFinder];

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
