import React from "react";

import "./Card.css";
//assets
import react from "./react.jpeg";
import tailwind from "./tailwind.jpeg";
import mui from "./mui.jpeg";

import { Typography, CardMedia } from "@mui/material";
const TechCard = ({ icon, title, description }) => (
  <div className="card flex items-center justify-center flex-col max-w-[300px] h-[300px] gap-3 bg-gray-900 p-6 rounded-sm shadow-[0_1px_5px_1px_cyan] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <CardMedia
      component="img"
      alt="img"
      image={icon}
      sx={{ objectFit: "cover", height: 120, width: 120, borderRadius: "50%" }}
    />
    <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const TechSection = () => (
  <section
    id="tech-stack"
    className="m-2 w-screen bg-bg text-white flex gap-4 flex-col pb-4"
  >
    <Typography
      className="text-center w-screen p-3 "
      fontFamily={"montserrat"}
      sx={{ fontWeight: 500, fontSize: 30, mt: 4 }}
    >
      Behind the Scenes
    </Typography>
    <h2 className="text-2xl font-bold mb-4 text-center w-screen pt-4 pb-5">
      Built Using...{" "}
    </h2>

    <div className="flex items-center justify-center md:flex-row flex-col gap-5 w-screen">
      <TechCard
        icon={react}
        title="React"
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
