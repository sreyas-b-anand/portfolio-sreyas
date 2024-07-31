import React from "react";
import { Box, Typography } from "@mui/material";

import SocialMailPh from "./SocialMailPh";

function Social() {
  return (
    <>
      <Box
        className="bg-[#121212] h-96 "
        sx={{
          maxWidth: 480,
          px: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          boxShadow: 3,
          borderRadius: "10px",
          gap: 2,
        }}
      >
        <Typography
          sx={{ color: "white", fontFamily: "monospace", fontSize: 20 }}
        >
          Let's Connect....
        </Typography>
        <SocialMailPh />
      </Box>
    </>
  );
}

export default Social;
