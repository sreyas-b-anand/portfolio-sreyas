import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

//router
import { Link, useHref } from "react-router-dom";


//assets
import git from "../../assets/socialimg/git.jpg";

const pages = [
  { id: 1, link: "Home", href: "/" },
  { id: 2, link: "About", href: "/about" },
  { id: 3, link: "My Projects", href: "/myprojects" },
  { id: 4, link: "Contact", href: "/contact" },
];

function ResponsiveAppBar() {
  const pathName = useHref();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className=" bg-[#141414] shadow-md">
      <Container maxWidth="xl" className=" bg-[#141414]">
        <Toolbar disableGutters className=" bg-[#141414]">
          <Typography
            className="text-white"
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontFamily: "montserrat",
            }}
          >
            SREYAS B ANAND
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                gap: 3,
              }}
            >
              {pages.map(
                (
                  page //responsive
                ) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.href}>{page.link}</Link>
                  </MenuItem>
                )
              )}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to={"https://github.com/sreyas-b-anand"}
                  target="_blank"
                  rel="noopener norefferer"
                >
                  Github
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            className="text-white"
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontFamily: "montserrat",
            }}
          >
            SREYAS B ANAND
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 2,
              pl: 4,
            }}
          >
            {pages.map((page) => {
              const isActive = pathName.endsWith(page.href);
              return (
                <Link
                className={isActive ? "opacity-[1] hover:opacity-100" : "opacity-[0.5] hover:opacity-100"}
                to={page.href}
                key={page.id}
                sx={{ my: 2, display: "block" }}
              >
                {page.link}
              </Link>
              )
})}
          </Box>
          <Box
            sx={{
              height: "100%",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              to={"https://github.com/sreyas-b-anand"}
              target="_blank"
              rel="noopener norefferer"
              className="border px-1 pr-2 flex items-center justify-center border-white rounded-[10px] opacity-[60%] hover:opacity-100"
            >
              <IconButton sx={{ height: 45, width: 45 }}>
                <img style={{ borderRadius: "50%" }} src={git} alt="git" />
              </IconButton>{" "}
              GitHub
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
