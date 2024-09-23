import * as React from "react";

import{ Card, Box }from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

//components
import Loading from "../projects/Loading";

export default function MyProjectComponent({ project }) {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Link to={project.weblink} target="_blank" rel="noopener norefferer">
          <Card
            sx={{
              maxWidth: 340,
              maxHeight: 500,
              boxShadow: 1,
              transition: "all ease-in-out 0.4s",
            }}
            key={project.id}
            component={"div"}
            className="text-primary   hover:scale-[1.05] dark:bg-bg_dark dark:text-text_primary dark:border-[#3B4148]"
          >
            <CardMedia
              component="img"
              alt="img"
              height="140 "
              image={project.image}
              sx={{ objectFit: "cover" }}
            />
            <CardContent className="bg-cardbg flex flex-col gap-2 dark:bg-bg_card_dark dark:text-text_primary">
              <Typography
                variant="h5"
                component="div"
                className="text-primary dark:text-text_primary"
                sx={{ fontFamily: "montserrat" }}
              >
                {project.header}
              </Typography>
              <Typography
                variant="body"
                sx={{ fontSize: "16px", fontFamily: "montserrat" }}
                className="text-primary dark:text-[#c2c2c2]"
              >
                {project.desc}
              </Typography>
              <Typography
                className="gap-3 "
                sx={{
                  fontFamily: "Montserrat",
                  display: "flex",
                  flexDirection: "row",
                }}
              ></Typography>
              <Box sx={{display:"flex" , alignItems:'center' , gap:1 , width:'100%' , flexWrap:'wrap', fontFamily:'Montserrat' , fontSize:'11px'}}>
                  {project.techStack.map((t , index) =>{
                    return <Box key={index} sx={{p:1, }} className="bg-yellow-200 rounded-full dark:bg-gray-500">
                    {t}
                    </Box>
                  })}
              </Box>
            </CardContent>
            <CardActions className="bg-cardbg dark:bg-bg_card_dark dark:text-text_primary">
              <Link
                to={project.gitlink}
                size="small"
                target="_blank"
                rel="noopener norefferer"
                className="text-primary px-2 bg-[#f6df49] rounded-[5px] hover:text-[black] hover:bg-cardbg dark:bg-bg_dark dark:text-white"
              >
                Git
              </Link>
              <Link
                to={project.weblink}
                size="small"
                target="_blank"
                rel="noopener norefferer"
                className="text-primary px-2 bg-[#f6df49] rounded-[5px] hover:text-[black] hover:bg-cardbg dark:bg-bg_dark dark:text-white"
              >
                Web
              </Link>
            </CardActions>
          </Card>
        </Link>
      </React.Suspense>
    </>
  );
}
