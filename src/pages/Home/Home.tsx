import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";
import { Box } from "@mui/material";
import Details from "../../components/Details/Details";
import Advertisement from "../../components/Advertisement/Advertisement";
import Category from "../../components/Category/Category";
const Home = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Hero />
      <Trending />
      <Category />
      <Details />
      <Advertisement />
    </Box>
  );
};

export default Home;
