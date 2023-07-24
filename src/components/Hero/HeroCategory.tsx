import { categoryData } from "../../utils/data";
import { Card, CardMedia, Grid, Typography } from "@mui/material";

const HeroCategory = () => {
  return (
    <Grid
      item
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      xs={5}
      sm={10}
      md={12}
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
    >
      {categoryData.map((cat) => (
        <Card
          key={cat.id}
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <CardMedia
            sx={{
              width: { xs: 190, sm: 300 },
              height: 140,
              borderRadius: "15px",
            }}
            image={cat.image}
            title={cat.title}
          />

          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "#869FB2" }}
          >
            {cat.title}
          </Typography>
        </Card>
      ))}
    </Grid>
  );
};

export default HeroCategory;
