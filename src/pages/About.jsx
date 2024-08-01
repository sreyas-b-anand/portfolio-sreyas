import React from "react";
import ResponsiveAppBar from "../components/Navbar/Navbar";
import Skills from "../components/skills/Skills";
import react from "../assets/skillsimg/react.jpeg";
import next from "../assets/skillsimg/next.jpeg";
import html from "../assets/skillsimg/html.jpeg";
import js from "../assets/skillsimg/js.jpeg";
import css from "../assets/skillsimg/css.jpeg";
import cpp from "../assets/skillsimg/cpp.jpeg";
import cp from "../assets/skillsimg/cp.jpeg";

import MiniNavbar from "../components/Navbar/MiniNavbar";

export const SkillContext = React.createContext(null);

function About() {
  const skills = [
    { lang: "React", logo: react },
    { lang: "Next js", logo: next },
    { lang: "C++", logo: cpp },
    { lang: "Html", logo: html },
    { lang: "CSS", logo: css },
    { lang: "JS", logo: js },
    { lang: "C", logo: cp },
  ];
  return (
    <div className="w-screen h-screen bg-bg text-primary">
      <main id="about" className="w-screen h-screen ">
        <ResponsiveAppBar />
        <MiniNavbar />
        <article className="pt-8 px-8 flex items-center justify-center flex-col ">
          <div className=" border border-gray-700 rounded-2xl p-3">
            <h3 className="text-center flex items-center justify-center text-xl font-semibold pt-2 ">
              About Me
            </h3>
            <section className="p-4 font-md">
              I am a Btech CSE undergrad and an aspiring engineer and is
              passionate about technology.I am very passionate about web
              devolpment.Apart from academics...I have a huge interest in
              FOOTBALL and is very much crazy about it. I am looking forward to
              devolep my skills in the world of programming through hardwork and
              determination.
            </section>
          </div>
        </article>
      </main>
      <main id="skills" className="w-screen h-screen">
        <SkillContext.Provider value={skills}>
          <Skills />
          <MiniNavbar />
        </SkillContext.Provider>
      </main>
    </div>
  );
}

export default About;
