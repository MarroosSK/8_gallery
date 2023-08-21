import "./Profile.css";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import bgVideo from "../../assets/waves.mp4";
import profilePic from "../../assets/profilePic.jpg";
import { FavoriteSliceType, SinglePhotoType } from "../../types/types";
import { useDispatch } from "react-redux";
import { removeFromFavoritesPhotos } from "../../features/favoriteSlice";
import CloseIcon from "@mui/icons-material/Close";

const Profile = () => {
  const dispatch = useDispatch();
  const favoritePhotos = useSelector(
    (state: { favoriteSlice: FavoriteSliceType }) =>
      state.favoriteSlice.favoritePhotos
  );
  console.log(favoritePhotos);

  const emptyFav = favoritePhotos.length === 0;

  return (
    <Box className="profile">
      <Box
        className="hero-video" // Tu sme presunuli triedu hero-video sem
        sx={{ height: "450px" }}
      >
        {/* video */}
        <video autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Box className="profile__top">
          <img src={profilePic} alt="" />
        </Box>
      </Box>
      <Box className="container">
        <Box className="profile__wrapper">
          <Box className="profile__middle">
            <Typography variant="h2" sx={{ fontSize: "2.5rem" }}>
              My <span className="highlight">List</span>
            </Typography>
          </Box>
          <Box className="profile__bottom">
            {emptyFav ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="250px"
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography
                  sx={{
                    color: "#374957",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Your list is <span className="highlight">Empty</span>
                </Typography>
              </Box>
            ) : (
              favoritePhotos.map((photo: SinglePhotoType, index) => (
                <div className="photoItem" key={index}>
                  <img src={photo.urls.regular} alt={`Favorite ${index}`} />
                  <CloseIcon
                    className="close__icon"
                    onClick={() => dispatch(removeFromFavoritesPhotos(photo))}
                  />
                </div>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
