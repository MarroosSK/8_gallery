import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";
import { Box } from "@mui/material";
import Details from "../../components/Details/Details";
import Advertisement from "../../components/Advertisement/Advertisement";
const Home = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Hero />
      <Trending />
      <Details />
      <Advertisement />
    </Box>
  );
};

export default Home;
