import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { Photo, SearchSliceType } from "../../types/types";
import { GalleryItem } from "../../components";
import galleryFloat from "../../assets/gallery-float.png";
import "./Gallery.css";
import HeroGallery from "../../components/Hero/HeroGallery";

const Gallery = () => {
  const photos = useSelector(
    (state: { searchSlice: SearchSliceType }) => state.searchSlice.photos
  );

  const emptyPhotos = photos.length === 0;
  return (
    <Box>
      <HeroGallery />
      <Box className="container">
        {emptyPhotos ? (
          <Box
            className="gallery__wrapper"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography
              sx={{ color: "#374957", fontSize: "22px", fontWeigh: "bold" }}
            >
              Use search to <span className="highlight">find image</span>
            </Typography>
            <img src={galleryFloat} className="img_float" />
          </Box>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            <div className="grid_gallery">
              {photos &&
                photos.map((photo: Photo) => (
                  <GalleryItem key={photo.id} photo={photo} />
                ))}
            </div>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Gallery;
