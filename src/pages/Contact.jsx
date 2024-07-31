import ResponsiveAppBar from "../components/Navbar/Navbar"
import ContactMe from "../components/contactcomponents/Contact"
import Social from "../components/contactcomponents/Social"

import { Container } from "@mui/material"
function Contact() {
  return (
    <div className="w-screen h-screen bg-bg text-primary ">
        <ResponsiveAppBar />
      <Container sx={{display : 'flex', alignItems:'center', justifyContent:"center"  ,flexDirection : {md : 'row' , xs : 'column'}}} className="w-screen  m-3">
      <ContactMe />
      <Social />
      </Container>
    </div>
  )
}

export default Contact
