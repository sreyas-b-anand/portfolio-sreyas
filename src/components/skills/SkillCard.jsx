import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

//context
import { SkillContext } from "../../pages/About";

export default function SkillCard() {
  const skills = useContext(SkillContext);

  return (
    <>
      <main className="flex flex-col items-center justify-center gap-3 p-5">
        <div>
          <Typography
            sx={{ fontFamily: "montserrat", fontSize: 25, fontWeight: 650 }}
            className="p-3 text-center pb-2  "
          >
            Skills
          </Typography>
        </div>
        <Box
          sx={{
            border: 0,
            borderRadius: 4,
            gap: { xs: 6, md: 4 },
            display: { xs: "grid", md: "grid" },
            gridTemplateColumns: { md: "repeat(3, 1fr)", sm: "repeat(1,1fr)" },
            gridTemplateRows: { md: "repeat(3, auto)", xs: "repeat(1,1fr)" },
          }}
          className="p-3   "
        >
          {skills.map((skill, index) => {
            return (
              <Card
                sx={{
                  maxWidth: 600,
                  height: 200,
                  p: 3,
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&": { hover: { border: "solid white" } },
                }}
                key={index}
                className="flex items-center bg-cardbg border-border  dark:bg-bg_card_dark dark:text-text_primary"
              >
                <CardMedia
                  sx={{
                    width: 110,
                    height: 110,
                    objectFit: "fit",
                    borderRadius: "50%",
                  }}
                  component="img"
                  image={skill.logo}
                  alt="logo"
                />
                <CardContent className=" bg-cardbg dark:bg-bg_card_dark ">
                  <Typography
                    sx={{ fontFamily: "montserrat", fontSize: "21px" }}
                    gutterBottom
                    component="div"
                    className="   text-center text-primary dark:text-text_primary"
                  >
                    {skill.lang}
                  </Typography>
                  <Typography
                    className="text-center text-[gray] dark:text-[#c4c4c4]"
                    sx={{ fontFamily: "montserrat", fontSize: "15px" }}
                  >
                    {skill.description}
                  </Typography>
                  <Typography
                    className="text-center text-[#656464] dark:text-[#cdcdcd]"
                    sx={{ fontFamily: "montserrat", fontSize: "11px", p: 2 }}
                  >
                    Level : {skill.level}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </main>
    </>
  );
}
