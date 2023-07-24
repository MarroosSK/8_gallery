import "./Hero.css";
import { Box, Grid, Stack, Typography } from "@mui/material";
import HeroCategory from "./HeroCategory";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import Looks5Icon from "@mui/icons-material/Looks5";

const Hero = () => {
  return (
    <Box
      sx={{ height: { xs: "100%", sm: "500px" }, backgroundColor: "#2D58CF" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box display="flex">
          <Typography
            variant="h1"
            fontSize="40px"
            fontWeight="bold"
            marginBottom="10px"
            color="inherit"
          >
            First
          </Typography>
          <Stack direction="row">
            <LooksOneIcon />
            <Looks5Icon />
          </Stack>
        </Box>
        <Typography fontSize="30px" fontWeight="bold" marginBottom="10px">
          all images in one place
        </Typography>
        <Typography fontSize="14px">
          find high quality images, powered by Unsplash
        </Typography>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="60px"
        >
          <HeroCategory />
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
