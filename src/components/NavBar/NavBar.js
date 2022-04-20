import React, { useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useAuth0 } from "@auth0/auth0-react";

import "./NavBar.scss";
import LoginButton from "../Auth0/LoginButton";
import LogoutButton from "../Auth0/LogoutButton";

const NavBar = (props) => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  console.log(user);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setanchorElNav] = useState(null);
  const [anchorElUser, setanchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setanchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setanchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setanchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setanchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#0E2E3F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/logos/logo.svg"}
              className="logo"
              alt="Developer Network Logo Symbol"
            />
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
              }}
            >
              {props.pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={"/" + page.toLowerCase()}
                >
                  <Typography
                    textAlign="center"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {props.pages.map((page) => (
              <Button
                component={Link}
                to={"/" + page.toLowerCase()}
                key={page}
                // className="app-links"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    background: "#185A7D",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!isAuthenticated ? (
              <LoginButton />
            ) : (
              <div>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.name} src={user.picture} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                  {/* {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))} */}
                </Menu>
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <div className='nav-bar'>
    //   <a href='/'>
    //     <img
    //       src={process.env.PUBLIC_URL + "/images/logos/logo.svg"}
    //       className="nav-bar-logo"
    //       alt="Developer Network Logo Symbol" />
    //   </a>

    //   <Menu>
    //     <MenuItem>
    //       <a className='nav-links' href='/'>Main</a>
    //     </MenuItem>
    //     <MenuItem>
    //       <a className='nav-links' href='/about'>About</a>
    //     </MenuItem>
    //     <MenuItem>
    //       <a className='nav-links' href='/domains'>Domains</a>
    //     </MenuItem>
    //     <MenuItem>
    //       <a className='nav-links' href='/modules'>Modules</a>
    //     </MenuItem>
    //   </Menu>
    //   {/* <a className='nav-links' href='/'>Main</a>
    //   <a className='nav-links' href='/about'>About</a>
    //   <a className='nav-links' href='/domains'>Domains</a>
    //   <a className='nav-links' href='/modules'>Modules</a> */}
    //   <Button variant="contained">Login</Button>
    // </div>
  );
};

export default NavBar;
