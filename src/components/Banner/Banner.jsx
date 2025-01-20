import React from "react";
import { Colors } from "../../styles/index";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.body_bg,
        padding: { xs: 1, sm: 3 },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        spacing={12}
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Box flex={1}>
          <img
            src="/images/banner-cat1.png"
            alt="motto-cat"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Stack
          flex={1}
          spacing={2}
          mt={{ xs: 2, sm: 0 }}
          alignItems={{ xs: "center", sm: "flex-start" }}
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Typography variant="h6">Our motto</Typography>
          <Typography variant="h2">Help animals</Typography>
          <Typography
            variant="body1"
            sx={{ width: { xs: "100%", sm: "450px" } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            arcu sapien. Mauris elementum nibh enim, ac tempus enim consectetur
            a. Suspendisse malesuada nunc felis, vestibulum imperdiet lacus
            eleifend eget. Suspendisse tempus mi libero, quis suscipit magna
            mattis non.
          </Typography>
          <Button
            sx={{
              backgroundColor: Colors.secondary,
              color: Colors.black,
              width: { xs: "100%", sm: "450px" },
              height: "60px",
              borderRadius: "2px",
              ":hover": {
                backgroundColor: Colors.primary,
                color: "white",
              },
            }}
          >
            Donate
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Banner;
