import { useSelector } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Photo, SearchSliceType } from "../../types/types";
import { GalleryItem } from "../../components";
import galleryFloat from "../../assets/gallery-float.png";
import "./Gallery.css";

const Gallery = () => {
  const photos = useSelector(
    (state: { searchSlice: SearchSliceType }) => state.searchSlice.photos
  );

  const emptyPhotos = photos.length === 0;
  return (
    <Box>
      <Container>
        {emptyPhotos ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography
              sx={{ color: "#374957", fontSize: "22px", fontWeigh: "bold" }}
            >
              Use search to{" "}
              <span style={{ color: "#2D58CF", fontWeight: "bold" }}>
                find image
              </span>
            </Typography>
            <img
              src={galleryFloat}
              height="500px"
              width="350px"
              className="img_float"
            />
          </Box>
        ) : (
          <Grid
            container
            justifyContent="center"
            sx={{ marginTop: 2, padding: "auto" }}
          >
            <div className="grid_gallery">
              {photos &&
                photos.map((photo: Photo) => (
                  <GalleryItem key={photo.id} photo={photo} />
                ))}
            </div>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Gallery;
