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
      <main className="flex flex-col items-center justify-center gap-3">
        <div>
          <Typography
            sx={{ fontFamily: "montserrat", fontSize: 25 }}
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
            gridTemplateColumns: { md: "repeat(4, 1fr)" },
            gridTemplateRows: { md: "repeat(3, auto)" },
          }}
          className="p-3   "
        >
          {skills.map((skill, index) => {
            return (
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: " black",
                  p: 2,
                  transition : 'all 0.3s ease',
                  "&": { hover: { border: "solid white" } },
                }}
                key={index}
                className="card-skill  "
              >
                <CardMedia
                  sx={{
                    width: 200,
                    height: 200,
                    objectFit: "fit",
                    borderRadius: "50%",
                  }}
                  component="img"
                  image={skill.logo}
                  alt="logo"
                />
                <CardContent className=" bg-black">
                  <Typography
                    sx={{ fontFamily: "montserrat" }}
                    gutterBottom
                    variant="h6"
                    component="div"
                    className=" bg-[black]  text-center text-white"
                  >
                    {skill.lang}
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
