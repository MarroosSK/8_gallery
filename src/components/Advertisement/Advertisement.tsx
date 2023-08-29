import { Box, Typography } from "@mui/material";
import community from "../../assets/community.webp";
const Advertisement = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: "30px",
        marginBottom: "30px",
        padding: "20px",
      }}
    >
      <Box
        maxWidth="1140px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="55px"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#b5cbd8",
          borderRadius: "10px",
          justifyContent: { xs: "space-between" },
          padding: { xs: "10px", sm: "20px", md: "40px" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: { xs: "10px", sm: "20px", md: "40px" } }}
        >
          <Typography
            sx={{
              color: "#374957",
              fontSize: "2.5rem",
              fontWeigh: "bold",
              marginBottom: "20px",
            }}
          >
            Join our <span className="highlight"> community</span>{" "}
          </Typography>
          <Typography
            sx={{
              color: "#374957",
              marginBottom: "20px",
              fontSize: "0.8rem",
            }}
          >
            Login today and create beautiful collections
          </Typography>
          <Box className="btn">
            <button className="primary__btn">Join &#8594;</button>
          </Box>
        </Box>
        <Box
          sx={{ display: { xs: "none", sm: "block" } }}
          data-aos="fade-in"
          data-aos-duration="1100"
        >
          <img
            src={community}
            width="500px"
            height="450px"
            style={{ margin: "0 auto", display: "block" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Advertisement;
