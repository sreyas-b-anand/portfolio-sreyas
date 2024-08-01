import React from "react";
import { Box, Typography } from "@mui/material";

import SocialMailPh from "./SocialMailPh";

function Social() {
  return (
    <>
      <Box
        className="bg-[#ffffff] h-96 text-black"
        sx={{
          maxWidth: 480,
          px: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          boxShadow: 3,
          borderTopRightRadius: { md: "10px", xs: 0 },
          borderBottomRightRadius: "10px",
          gap: 2,

          borderBottomLeftRadius: { xs: "10px", md: 0 },
        }}
      >
        <Box
          sx={{
            maxWidth: 400,
            px: 6,
            gap: 4,
            borderRadius: "10px ",
            boxShadow: 2,

            py: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontFamily: "montserrat",
              fontSize: { xs: 18, md: 20 },
              fontWeight: 600,
            }}
          >
            Let's Connect....
          </Typography>
        </Box>
        <SocialMailPh />
      </Box>
    </>
  );
}

export default Social;
