import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const HeaderNav = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(3),
}));

const HeaderIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  justifyContent: "flex-end",
  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(4),
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [storiesAnchorEl, setStoriesAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isStoriesMenuOpen = Boolean(storiesAnchorEl);

  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:900px) and (max-width:1199px)"
  );

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleStoriesMenuOpen = (event) => {
    setStoriesAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setStoriesAnchorEl(null);
  };

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant={isLargeScreen || isMediumScreen ? "h3" : "h4"}
            sx={{
              flexGrow: isLargeScreen || isMediumScreen ? 0 : 1,
              textAlign: isLargeScreen || isMediumScreen ? "left" : "center",
            }}
          >
            Cats & Friends
          </Typography>
          {isLargeScreen || isMediumScreen ? (
            <>
              <HeaderNav>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Volunteer</Button>
                <Button
                  color="inherit"
                  endIcon={<ExpandMoreIcon />}
                  onClick={handleStoriesMenuOpen}
                >
                  Stories
                </Button>
                <Menu
                  anchorEl={storiesAnchorEl}
                  open={isStoriesMenuOpen}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Podcast</MenuItem>
                </Menu>
                <Button color="inherit">Login</Button>
              </HeaderNav>
              <HeaderIcons>
                <FavoriteIcon />
                <Divider orientation="vertical" flexItem />
                <PersonIcon />
                <Divider orientation="vertical" flexItem />
                <NotificationsIcon />
              </HeaderIcons>
            </>
          ) : (
            <>
              <IconButton onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                <MenuItem onClick={handleMenuClose}>Volunteer</MenuItem>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="stories-content"
                    id="stories-header"
                  >
                    <Typography>Stories</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Podcast</MenuItem>
                  </AccordionDetails>
                </Accordion>
                <MenuItem onClick={handleMenuClose}>Login</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
  );
};

export default Header;
