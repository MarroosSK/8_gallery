import "./Hero.css";
import { Box } from "@mui/material";
import { Search } from "..";

const HeroGallery = () => {
  return (
    <Box
      sx={{ marginTop: { xs: "50px", sm: "25px", md: "0" }, padding: "55px 0" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Search />
      </Box>
    </Box>
  );
};

export default HeroGallery;
