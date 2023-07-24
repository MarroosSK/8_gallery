import { Box, Button, Container, Grid, Typography } from "@mui/material";
import community from "../../assets/community.webp";
const Advertisement = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ minHeight: "100vh", marginTop: "60px", marginBottom: "60px" }}
    >
      <Container>
        <Grid
          container
          alignItems="center"
          textAlign="center" // Pridajte textAlign="center"
          marginTop="55px"
          sx={{
            backgroundColor: "#DFF2FE",
            borderRadius: "5%",
            justifyContent: { xs: "center", lg: "space-between" },
            padding: { xs: "10px", sm: "20px", md: "40px" },
          }}
        >
          <Grid item>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography
                sx={{
                  color: "#374957",
                  fontSize: "22px",
                  fontWeigh: "bold",
                  marginBottom: "20px",
                }}
              >
                Join our{" "}
                <span style={{ color: "#2D58CF", fontWeight: "bold" }}>
                  creator community
                </span>{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#374957",
                  maxWidth: "500px",
                  marginBottom: "20px",
                }}
              >
                Behind every stock image, there's a creative mind. You can also
                create content and sell it.
              </Typography>
              <Button
                variant="contained"
                sx={{ width: "35%", alignSelf: "center" }}
              >
                Sell content
              </Button>
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
            <img
              src={community}
              width="400px"
              height="500px"
              style={{ margin: "0 auto", display: "block" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Advertisement;
