import React from "react";
import { Colors } from "../../styles/index";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: Colors.shaft,
        color: Colors.white,
        padding: "40px 20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          justifyContent: {
            xs: "flex-start",
            sm: "flex-start",
            md: "space-between",
          },
          gap: "20px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
          }}
        >
          <Typography variant="h6" color={Colors.primary}>
            About us
          </Typography>
          <Typography
            variant="body2"
            color={Colors.white}
            sx={{ marginTop: "10px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <FacebookIcon
              sx={{ color: Colors.white, marginRight: "8px", fontSize: "28px" }}
            />
            <TwitterIcon
              sx={{ color: Colors.white, marginRight: "8px", fontSize: "28px" }}
            />
            <InstagramIcon sx={{ color: Colors.white, fontSize: "28px" }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
            },
            justifyContent: "space-between",
            flex: 2,
            gap: "20px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: "left",
            }}
          >
            <Typography variant="h6" color={Colors.primary}>
              Information
            </Typography>
            <Box
              component="ul"
              sx={{ listStyle: "none", padding: 0, marginTop: "10px" }}
            >
              <Box
                component="li"
                sx={{ marginBottom: "5px", color: Colors.white }}
              >
                Lorem Ipsum
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: "5px", color: Colors.white }}
              >
                Privacy & Policy
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: "5px", color: Colors.white }}
              >
                Terms & Conditions
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              textAlign: "left",
            }}
          >
            <Typography variant="h6" color={Colors.primary}>
              My Account
            </Typography>
            <Box
              component="ul"
              sx={{ listStyle: "none", padding: 0, marginTop: "10px" }}
            >
              <Box
                component="li"
                sx={{ marginBottom: "5px", color: Colors.white }}
              >
                Initiatives and projects
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: "5px", color: Colors.white }}
              >
                Favorite animals
              </Box>
              <Box
                component="li"
                sx={{ marginBottom: "5px", color: Colors.white }}
              >
                My Account
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
