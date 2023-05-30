import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import {
  StyledTypography,
  StyledAppBar,
  StyledBox,
  StyledLink,
  CustomLink,
} from "./Navbar.style";

import MenuIcon from "@mui/icons-material/Menu";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const pages = ["Crops", "Departments", "Farming Methods", "Company", "About"];
const settings = ["Account", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const authState = useSelector((state) => state.auth);

  const { isAuthenticated } = authState;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar disableGutters>
        <SpaOutlinedIcon
          sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#A2D729" }}
        />
        <StyledTypography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#A2D729" }}
        >
          Concoe Farm
        </StyledTypography>

        <StyledBox sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <CustomLink to={`/${page}`}>
                  <MenuItem textalign="center">{page}</MenuItem>
                </CustomLink>
              </MenuItem>
            ))}
          </Menu>
        </StyledBox>
        <SpaOutlinedIcon
          sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "#A2D729" }}
        />
        <StyledTypography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
          }}
        >
          Concoe
        </StyledTypography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            margin: "auto",
            justifyContent: "center",
          }}
        >
          {pages.map((page) => (
            <StyledLink
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 3,
                color: "white",
                display: "block",
                marginRight: "7px",
                fontSize: "small",
              }}
              to={`/${page}`}
            >
              {page}
            </StyledLink>
          ))}
        </Box>
        {isAuthenticated ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon
                  sx={{
                    color: "#fff",
                  }}
                />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <CustomLink to={`/${setting}`}>
                    <Typography textAlign="center" variant="h4">
                      {setting}
                    </Typography>
                  </CustomLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Box>
            <StyledLink to="/signup">Sign Up</StyledLink>
            <StyledLink to="/Login">Login</StyledLink>
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};
export default Navbar;
