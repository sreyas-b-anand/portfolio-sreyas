import React from "react";
//components
import ResponsiveAppBar from "../components/Navbar/Navbar";
import Skills from "../components/skills/Skills";
//assets
import react from "../assets/skillsimg/react.jpeg";
import next from "../assets/skillsimg/next.jpg";
import html from "../assets/skillsimg/html.jpeg";
import js from "../assets/skillsimg/js.jpeg";
import css from "../assets/skillsimg/css.jpeg";
import cpp from "../assets/skillsimg/cpp.jpeg";
import cp from "../assets/skillsimg/cp.jpeg";
import python from '../assets/skillsimg/python.jpeg'

import MiniNavbar from "../components/Navbar/MiniNavbar";

export const SkillContext = React.createContext(null);

function About() {
  const skills = [
    { lang: "React", logo: react, level: "Intermediate", description: "A library for building UIs." },
    { lang: "Next.js", logo: next, level: "Basic", description: "A React framework for SSR." },
    { lang: "C++", logo: cpp, level: "Intermediate", description: "A language for system and game development." },
    { lang: "HTML", logo: html, level: "Intermediate", description: "The standard markup for web pages." },
    { lang: "CSS", logo: css, level: "Intermediate", description: "A language for styling web pages." },
    { lang: "JavaScript", logo: js, level: "Intermediate", description: "A language for web interactions." },
    { lang: "C", logo: cp, level: "Intermediate", description: "A language for low-level programming." },
    { lang: "Python", logo: python, level: "Basic", description: "A versatile, easy-to-read language." }
    

  ];
  return (
    <div className="w-screen h-screen bg-bg text-primary  dark:bg-bg_dark dark:text-text_primary">
      <main id="about" className="w-screen h-screen ">
        <ResponsiveAppBar />
        <MiniNavbar />
        <article className="pt-8  flex items-center justify-center flex-col m-4 p-4">
          <div className=" border border-gray-700 rounded-2xl p-4 m-5">
            <h3 className="text-center flex items-center justify-center text-xl font-bold pt-2 m-6 font-[montserrat]">
              About Me
            </h3>
            <section className=" font-medium m-4 font-[montserrat]">
              I am a B.Tech CSE undergraduate and an aspiring engineer with a
              deep passion for technology and web development. Beyond academics,
              I have a keen interest in football and a growing enthusiasm for
              machine learning. I am eager to enhance my programming skills
              through hard work and determination, and I look forward to making
              meaningful contributions in these fields.
            </section>
          </div>
        </article>
      </main>
      <main id="skills" className="w-screen h-fit pt-3 bg-bg   dark:bg-bg_dark dark:text-text_primary">
        <SkillContext.Provider value={skills}>
          <Skills />
          <MiniNavbar />
        </SkillContext.Provider>
      </main>
    </div>
  );
}

export default About;
