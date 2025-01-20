import React from "react";
import { Colors } from "../../styles/index";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useMediaQuery from "@mui/material/useMediaQuery";
// import Divider from "@mui/material/Divider";

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  const isMobileScreen = useMediaQuery("(max-width:900px)");

  if (!isMobileScreen) {
    return null;
  }

  return (
    <Paper
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000, 
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: Colors.shaft }}
      >
        <BottomNavigationAction icon={<FavoriteIcon sx={{ color: Colors.primary }} />} />
        {/* <Divider orientation="vertical" flexItem sx={{ bgcolor: Colors.border }} /> */}
        <BottomNavigationAction icon={<PersonIcon sx={{ color: Colors.primary }} />} />
        {/* <Divider orientation="vertical" flexItem sx={{ bgcolor: Colors.border }} /> */}
        <BottomNavigationAction icon={<NotificationsIcon sx={{ color: Colors.primary }} />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
