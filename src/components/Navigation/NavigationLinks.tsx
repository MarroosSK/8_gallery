import { IconButton, Typography, Box } from "@mui/material";
import gallery from "../../assets/picture.png";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <Box display="flex" sx={{ marginBottom: { xs: "20px", sm: 0 } }}>
      <Link to="/gallery">
        <IconButton
          sx={{
            background: "transparent",
            flexDirection: "column",
          }}
        >
          <img src={gallery} alt="gallery_icon" width={34} />
          <Typography
            variant="caption"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Gallery
          </Typography>
        </IconButton>
      </Link>
      {/* no db yet */}
      {/* <Link to="/profile">
        <IconButton
          sx={{
            background: "transparent",
            flexDirection: "column",
          }}
        >
          <img src={user} alt="profile_icon" width={34} />
          <Typography
            variant="caption"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Profile
          </Typography>
        </IconButton>
      </Link> */}
    </Box>
  );
};

export default NavigationLinks;
