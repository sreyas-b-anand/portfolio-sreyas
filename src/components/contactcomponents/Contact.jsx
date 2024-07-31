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
        className="bg-[#2c2b2b] h-96"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          px: 4,
          maxHeight: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
          maxWidth: 480,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          mb={2}
          sx={{
            color: "white",
            fontFamily: "monospace",
            pt: 4,
          }}
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
                className="bg-gray-300"
                required
                id="standard-search"
                label="First name"
                type="text"
                variant="standard"
                value={firstname}
                onChange={(e) => setfirstName(e.target.value)}
                sx={{
                  borderRadius: 1,
                  maxWidth: 450,
                  color: "#2f2f2f",
                  ml: 2,
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                className="bg-gray-300"
                id="standard-search"
                label="Last name"
                type="text"
                variant="standard"
                value={lastname}
                onChange={(e) => setlastName(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  border: "#999999",
                  maxWidth: 450,
                  color: "#2f2f2f",
                  mr: 2,
                  borderRadius: 1,
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2} sx={{ maxWidth: 450 }}>
          <Grid item xs={12} sx={{ mx: 2 }}>
            <TextField
              className="bg-gray-300"
              required
              id="standard-search"
              label="Email"
              type="email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{
                backgroundColor: "white",
                color: "#2f2f2f",
                borderRadius: 1,
                boxShadow: 2,
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
                backgroundColor: "white",
                color: "#2f2f2f",
                borderRadius: 1,
                boxShadow: 2,
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          sx={{
            color: "white",
            px: 2,
            mb: 2,
            fontFamily: "montserrat",
            "&": {
              hover: {
                boxShadow: "3 cyan",
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
