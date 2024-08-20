import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//tilt
import Tilt from "react-parallax-tilt";
//assets
import react from "./react.jpeg";
import tailwind from "./tailwind.jpeg";
import mui from "./mui.jpeg";

import { Typography, CardMedia } from "@mui/material";
import { DarkContext } from "../../App";

const TechCard = ({ icon, title, description }) => {
  AOS.init({
    offset: 10,
    delay: 40,
    easing: "ease-in-out",
    duration: "700",
    
  });
  const { darkMode } = useContext(DarkContext);
  return (
    <Tilt
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor={!darkMode ? "#fefc09" : "#121212"}
      glarePosition="bottom"
      scale={1.1}
      style={{
        boxShadow: "0 48px 60px 0 rgba(2,14,26,.24)",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        data-aos="flip-left"
        className="card flex items-center justify-center flex-col max-w-[300px] h-[300px] border border-[#deca7b] gap-3 bg-cardbg p-6 rounded-md  transform transition-transform duration-300 hover:scale-105 dark:border-[#3B4148] dark:bg-bg_card_dark dark:text-text_primary hover:cursor-pointer opacity-[100%]"
      >
        <CardMedia
          component="img"
          alt="img"
          image={icon}
          sx={{
            objectFit: "cover",
            height: 120,
            width: 120,
            borderRadius: "50%",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        />
        <h3 className="text-xl font-semibold mb-2 text-primary font-[montserrat] dark:text-white">
          {title}
        </h3>
        <p className="text-secondary text-center font-[montserrat]  dark:text-text_primary">
          {description}
        </p>
      </div>
    </Tilt>
  );
};

const TechSection = () => (
  <section
    id="tech-stack"
    className="p-2 w-screen md:h-[90%] sm:h-auto bg-bg text-primary flex gap-4 flex-col pb-4 dark:bg-bg_dark dark:text-text_primary"
  >
    <Typography
      className="text-center w-screen p-3 dark:text-text_primary z-50"
      fontFamily={"montserrat"}
      sx={{ fontWeight: 700, fontSize: 30, mt: 4 }}
    >
      Behind the Scenes
    </Typography>
    <h2 className="text-2xl font-bold mb-4 text-center w-screen pt-4 pb-5 dark:text-text_primary z-50">
      Built Using...{" "}
    </h2>

    <div className="flex items-center justify-center md:flex-row flex-col gap-7 w-screen">
      <TechCard
        icon={react}
        title="React JS"
        description="A JavaScript library for building user interfaces."
      />
      <TechCard
        icon={tailwind}
        title="Tailwind CSS"
        description="A utility-first CSS framework for creating custom designs."
      />
      <TechCard
        icon={mui}
        title="Material-UI"
        description="A popular React UI framework with pre-designed components."
      />
    </div>
  </section>
);

export default TechSection;
