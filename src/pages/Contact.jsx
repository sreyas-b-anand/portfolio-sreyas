//components
import ResponsiveAppBar from "../components/Navbar/Navbar";
import ContactMe from "../components/contactcomponents/Contact";
import Social from "../components/contactcomponents/Social";

import { Container } from "@mui/material";
function Contact() {
  return (
    <div className="w-screen md:h-screen sm:h-auto bg-bg text-primary dark:bg-bg_dark dark:text-text_primary">
      <ResponsiveAppBar />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { md: "row", xs: "column" },
        }}
        className="w-screen  mt-9 pb-3"
      >
        <ContactMe />
        <Social />
      </Container>
    </div>
  );
}

export default Contact;
