import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import { motion } from "framer-motion";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import Looks5Icon from "@mui/icons-material/Looks5";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Grid
        container
        height="100%"
        sx={{
          justifyContent: {
            xs: "center",
            sm: "space-between",
          },
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6} textAlign="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography fontSize="2rem" sx={{ color: "#fff" }}>
              First
            </Typography>
            <Stack direction="row">
              <LooksOneIcon />
              <Looks5Icon />
            </Stack>
          </Box>
          <Typography fontSize="1rem" sx={{ color: "#fff" }}>
            powered by Unsplash
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          textAlign={"center"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          marginTop="40px"
        >
          <Stack direction="row" spacing={2}>
            <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
              <IconButton sx={{ background: "rgba(245, 229, 237, 0.2)" }}>
                <img src={fbIcon} alt="fb_icon" width={20} />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
              <IconButton sx={{ background: "rgba(245, 229, 237, 0.2)" }}>
                <img src={twitterIcon} alt="twitter_icon" width={20} />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
              <IconButton sx={{ background: "rgba(245, 229, 237, 0.2)" }}>
                <img src={instagramIcon} alt="insta_icon" width={20} />
              </IconButton>
            </motion.div>
          </Stack>
          <Typography
            fontSize="10px"
            marginBottom="10px"
            sx={{ color: "#fff" }}
          >
            @2023, All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
