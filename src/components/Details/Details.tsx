import { Box, Grid, Typography } from "@mui/material";
import detail from "../../assets/resources.webp";
import DetailsList from "./DetailsList";
const Details = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        marginTop: "60px",
        backgroundColor: "#545E62",
        paddingTop: "60px",
      }}
    >
      <Box display="flex">
        <Typography
          sx={{ color: "white", fontSize: "22px", fontWeigh: "bold" }}
        >
          Smartest choice for{" "}
          <span style={{ color: "#FEC343", fontWeight: "bold" }}>
            creatives like you
          </span>{" "}
        </Typography>
      </Box>

      <Typography
        sx={{ color: "inherit", marginTop: "15px", fontSize: "16px" }}
      >
        Whether you're looking for designs or photographs, you'll find the
        perfect asset here
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        marginTop="55px"
      >
        <Grid item xs={12} md={5}>
          <DetailsList />
        </Grid>
        <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={detail}
            width="400px"
            height="500px"
            style={{ margin: "0 auto", display: "block" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;
