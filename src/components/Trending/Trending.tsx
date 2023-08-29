import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "./Trending.css";
import { Photo, TrendingSliceType } from "../../types/types";
import { NavLink } from "react-router-dom";
import { fetchTrendingImages } from "../../api/fetchSearchedData";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setTrendyPhotos } from "../../features/trendingSlice";
import { GalleryItem } from "..";

const Trending = () => {
  const dispatch = useDispatch();
  const trendyPhotos = useSelector(
    (state: { trendingSlice: TrendingSliceType }) =>
      state.trendingSlice.trendyPhotos
  );

  const { data } = useQuery(["trendingPhotos"], async () => {
    return fetchTrendingImages();
  });

  useEffect(() => {
    if (data) {
      dispatch(setTrendyPhotos(data));
    }
  }, [dispatch, data]);

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ minHeight: "100vh", marginTop: "60px" }}
      >
        <Box display="flex">
          <Typography
            sx={{
              color: "#374957",
              fontSize: "2.5rem",
              fontWeigh: "bold",
              textWrap: "balance",
            }}
          >
            <span className="highlight">Explore</span> trending images
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "inherit",
            marginTop: "15px",
            fontSize: "0.8rem",
            textWrap: "balance",
          }}
        >
          Check what's popular and find out more details
        </Typography>

        {/* TRENDY */}
        <div
          className="grid_gallery"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          {trendyPhotos &&
            trendyPhotos.map((photo: Photo) => (
              <GalleryItem key={photo.id} photo={photo} />
            ))}
        </div>
      </Box>
      <Box className="btn">
        <NavLink to="/gallery">
          <button className="primary__btn">see more &#8594;</button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Trending;
