import "./Hero.css";
import { Box, Typography } from "@mui/material";
import { Search } from "..";

const Hero = () => {
  return (
    <Box
      sx={{ height: "500px", backgroundColor: "#2D58CF", padding: "30px 0" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          marginTop: { xs: "125px", sm: "75px" },
        }}
      >
        <Typography
          fontWeight="bold"
          marginBottom="10px"
          lineHeight="50px"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem" },
            textWrap: "balance",
          }}
        >
          All images in <span className="highlight">One Place</span>
        </Typography>
        <Typography
          marginBottom="40px"
          sx={{
            textWrap: "balance",
            marginTop: { xs: "10px", sm: "30px" },
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        >
          find high quality images, powered by Unsplash
        </Typography>
        <Search />
      </Box>
    </Box>
  );
};

export default Hero;
