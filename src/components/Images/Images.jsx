import React from "react";
import { Colors } from "../../styles/index";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { itemData } from "../data";
import { useMediaQuery } from "@mui/material";

const Images = () => {
  const isLargeScreen = useMediaQuery("(min-width:900px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:600px) and (max-width:899.95px)"
  );

  let cols = 1;
  if (isLargeScreen) {
    cols = 3;
  } else if (isMediumScreen) {
    cols = 2;
  } else {
    cols = 1;
  }

  return (
    <>
      <ListSubheader
        component="h3"
        sx={{
          color: Colors.black,
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Waiting for their owners
      </ListSubheader>
      <ImageList
        sx={{
          maxWidth: 1100,
          margin: "0 auto",
          gap: 16,
          padding: 2,
        }}
        variant="masonry"
        cols={cols}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <ImageListItemBar
              title={item.title}
              sx={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))",
                color: Colors.white,
              }}
              actionIcon={
                <IconButton
                  sx={{
                    color: Colors.white,
                    "&:hover": { color: Colors.primary },
                  }}
                  aria-label={`info about ${item.title}`}
                >
                  <FavoriteIcon data-testid="FavoriteIcon" />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Images;
