import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";

import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailTemplate = {
      from_firstname: firstname,
      from_lastname: lastname,
      from_email: email,
      message: message,
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        emailTemplate,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          console.log("Email sent succesfully");
        },
        () => {
          console.log("Failed to send email. Please try again.");
        }
      );

    setfirstName("");
    setlastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Box
        className="bg-[#faff97] h-96 dark:bg-gray-800 dark:text-text_primary"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          fontFamily: "montserrat",
          px: 4,
          
          maxHeight: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
          maxWidth: 480,
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: { md: "10px", xs: 0 },
          boxShadow: 1,
          borderTopRightRadius: { xs: "10px", md: 0 },
        }}
      >
        <Typography
          variant="h5"
          mb={2}
          sx={{
            fontWeight: 530,
            fontFamily: "montserrat",
            color: "#2f2f2f",
            pt: 4,
          }}
          className="dark:text-text_primary"
        >
          Contact Me
        </Typography>

        <Box
          component={"div"}
          sx={{
            display: "grid",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <TextField
                className="bg-[#ffffff]"
                required
                id="standard-search"
                label="First name"
                type="text"
                variant="standard"
                value={firstname}
                onChange={(e) => setfirstName(e.target.value)}
                sx={{
                  fontFamily: "montserrat",
                  borderRadius: 1,
                  maxWidth: 450,
                  color: "#2f2f2f",
                  ml: 2,
                  borderColor: "#e5e7eb",
                  "& .MuiInputBase-input": {
                    color: "#2f2f2f",
                  },
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                className="bg-[#ffffff]"
                id="standard-search"
                label="Last name"
                type="text"
                variant="standard"
                value={lastname}
                onChange={(e) => setlastName(e.target.value)}
                sx={{
                  fontFamily: "montserrat",
                  backgroundColor: "#ffffff",
                  border: "#e5e7eb",
                  maxWidth: 450,
                  color: "#2f2f2f",
                  mr: 2,
                  borderRadius: 1,
                  "& .MuiInputBase-input": {
                    color: "#2f2f2f",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2} sx={{ maxWidth: 450 }}>
          <Grid item xs={12} sx={{ mx: 2 }}>
            <TextField
              className="bg-[#ffffff]"
              required
              id="standard-search"
              label="Email"
              type="email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{
                fontFamily: "montserrat",
                backgroundColor: "#ffffff",
                color: "#2f2f2f",
                borderRadius: 1,
                borderColor: "#e5e7eb",
                "& .MuiInputBase-input": {
                  color: "#2f2f2f",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ mx: 2 }}>
            <TextField
              required
              id="standard-search"
              label="Message"
              type="text"
              variant="standard"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              sx={{
                fontFamily: "montserrat",
                backgroundColor: "#ffffff",
                color: "#2f2f2f",
                borderRadius: 1,
                borderColor: "#e5e7eb",
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          sx={{
            backgroundColor: "black",
            color: "#ffffff",
            fontWeight: 600,
            px: 2,
            mb: 2,
            fontFamily: "montserrat",
            "&": {
              hover: {
                backgroundColor: "black",
                opacity: 1,
              },
            },
          }}
        >
          Send
        </Button>
      </Box>
    </>
  );
};

export default ContactMe;
