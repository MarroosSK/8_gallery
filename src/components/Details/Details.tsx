import { Box, Grid, Typography } from "@mui/material";
import detail from "../../assets/resources.webp";
import DetailsList from "./DetailsList";
import "./Details.css";
const Details = () => {
  return (
    <Box
      className="container"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        marginTop: "10px",
        paddingTop: "60px",
      }}
    >
      <Box display="flex">
        <Typography
          sx={{
            color: "#374957",
            fontSize: "2.5rem",
            fontWeigh: "bold",
            textWrap: "balance",
          }}
        >
          Smartest choice for{" "}
          <span className="highlight">creatives like you</span>{" "}
        </Typography>
      </Box>

      <Typography
        sx={{
          color: "#374957",
          marginTop: "15px",
          fontSize: "0.8rem",
          textWrap: "balance",
        }}
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
        <Grid item xs={12} md={6}>
          <DetailsList />
        </Grid>
        <Grid
          item
          md={6}
          sx={{ display: { xs: "none", md: "block" } }}
          className="details__img-box"
        >
          <img src={detail} style={{ margin: "0 auto", display: "block" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;
