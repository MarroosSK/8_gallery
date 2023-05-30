import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import { Photo, SearchSliceType } from "../../types/types";
import { GalleryItem } from "../../components";

const Gallery = () => {
  const photos = useSelector(
    (state: { searchSlice: SearchSliceType }) => state.searchSlice.photos
  );

  return (
    <Box sx={{ padding: "auto" }}>
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: 2, padding: "auto" }}
      >
        {photos && photos.map((photo: Photo) => <GalleryItem photo={photo} />)}
      </Grid>
    </Box>
  );
};

export default Gallery;
