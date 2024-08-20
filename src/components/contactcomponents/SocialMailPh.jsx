import React from "react";
//assets
import mail from "../../assets/socialimg/mail.jpeg";
import ph from "../../assets/socialimg/ph.jpeg";

//icons
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

//material
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "@mui/material";
function SocialMailPh() {
  const medias = [
    {
      logo: GrInstagram,
      link: "https://www.instagram.com/sre___y___a___s/",
    },
    {
      logo: BsTwitterX,
      link: "https://twitter.com/sre___y___as___/",
    },
    {
      logo: FaLinkedin,
      link: "https://www.linkedin.com/in/sreyas-b-anand",
    },
  ];
  return (
    <>
      <Box
        className=" flex flex-col "
        sx={{
          maxWidth: 400,
          px: 4,
          gap: 4,
          borderRadius: "10px ",
          boxShadow: 1,
          flexWrap: "wrap",
          alignItems: "start",
          justifyContent: "center",
          py: 2,
        }}
      >
        <Box className="flex items-center">
          <IconButton
            sx={{
              transition: "transform 0.3s ease",
              "&:hover": {
                color: "#8b9dc3",
                transform: "scale(1.2)",
              },
            }}>
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
          <Typography sx={{ fontFamily: "montserrat" }}>
            sreyas1045@gmail.com
          </Typography>
        </Box>
        <Box className="flex items-center">
          <IconButton
          
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              color: "#8b9dc3",
              transform: "scale(1.2)",
            },
          }}>
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
          <Typography sx={{ fontFamily: "montserrat" }}>7736736085</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" , gap:1 }}>
          {medias.map((media, index) => {
            return (
              <IconButton
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    color: "#8b9dc3",
                    transform: "scale(1.3)",
                  },
                }}
                key={index}
              >
                <Link target="_blank" rel="noopener" href={media.link}>
                  <media.logo color="black"/>
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
