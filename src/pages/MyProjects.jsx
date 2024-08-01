import React from "react";
//components
import ResponsiveAppBar from "../components/Navbar/Navbar";
import MyProjectComponent from "../components/projects/MyProjectComponent";

//assets
import grammrimg from "../assets/projectsimg/grammr.jpg";
import bookFinderimg from "../assets/projectsimg/bookfinder.jpg";
import tic from "../assets/projectsimg/tic.jpg";

function MyProjects() {
  const grammr = {
    header: "Grammr",
    desc: "I have created a simple grammar checking website using Gemini api",
    gitlink: "https://github.com/sreyas-b-anand/grammr",
    weblink: "https://grammr.vercel.app/",
    id: 1,
    image: grammrimg,
  };
  const tictactoe = {
    header: "Tic-Tac-Toe",
    desc: "I have created a tictactoe game , using C++ ,which runs on terminal",
    gitlink: "https://github.com/sreyas-b-anand/tictactoeCpp",
    weblink: "https://github.com/sreyas-b-anand/tictactoeCpp",
    id: 2,
    image: tic,
  };
  const bookFinder = {
    header: "Booklib",
    desc: "I have created a simple book finder website using Google Books api",
    gitlink: "https://github.com/sreyas-b-anand/book-finder",
    weblink: "https://booklib-sreyas.vercel.app/",
    id: 3,
    image: bookFinderimg,
  };
  const projects = [grammr, tictactoe, bookFinder];

  return (
    <div className="w-screen h-screen bg-bg text-primary">
      <ResponsiveAppBar />
      <MyProjectComponent projects={projects} />
    </div>
  );
}

export default MyProjects;
