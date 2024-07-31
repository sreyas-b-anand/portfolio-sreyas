import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import mail from "../../assets/socialimg/mail.jpeg";
import ph from "../../assets/socialimg/ph.jpeg";
import ig from "../../assets/socialimg/ig-x-ld/ig.jpeg";
import x from "../../assets/socialimg/ig-x-ld/x.jpeg";
import ld from "../../assets/socialimg/ig-x-ld/ld.jpeg";

import { Link } from "@mui/material";
function SocialMailPh() {
  const medias = [
    {
      logo: ig,
      link: "https://www.instagram.com/sre___y___a___s/",
      alt: "ig",
    },
    {
      logo: x,
      link: "https://twitter.com/sre___y___as___/",
      alt: "x",
    },
    {
      logo: ld,
      link: "https://www.linkedin.com/in/sreyas-b-anand",
      alt: "ld",
    },
  ];
  return (
    <>
      <Box
        className=" flex flex-col "
        sx={{
          maxWidth: 400,
          px: 3,
          gap: 4,
          borderRadius: "10px ",
          boxShadow: 3,
          flexWrap: "wrap",
          alignItems: "start",
          justifyContent: "center",
          py: 2,
        }}
      >
        <Box className="flex items-center">
          <IconButton>
            <a href="mailto:sreyas1045gmail.com">
              <img
                height={"35px"}
                width={"35px"}
                style={{ borderRadius: "50%", objectFit: "fit" }}
                src={mail}
                alt="mail"
              />
            </a>
          </IconButton>
          <Typography>sreyas1045@gmail.com</Typography>
        </Box>
        <Box className="flex items-center">
          <IconButton>
            <a href="tel:+917736736085">
              <img
                height={"35px"}
                width={"35px"}
                style={{ borderRadius: "50%", objectFit: "contain" }}
                src={ph}
                alt="ph"
              />
            </a>
          </IconButton>
          <Typography>7736736085</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {medias.map((media, index) => {
            return (
              <IconButton
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    color: "#8b9dc3",
                    transform: "scale(1.2)",
                  },
                }}
                key={index}
              >
                <Link target="_blank" rel="noopener" href={media.link}>
                  <img
                    height={"25px"}
                    width={"25px"}
                    style={{ borderRadius: "50%" }}
                    src={media.logo}
                    alt={media.alt}
                  />
                </Link>
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default SocialMailPh;
