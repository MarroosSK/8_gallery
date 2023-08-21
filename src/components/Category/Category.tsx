import { useEffect } from "react";
import { categoryData } from "../../utils/data";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import "./Category.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { fetchSearchedData } from "../../api/fetchSearchedData";
import { searchTerm, setPhotos } from "../../features/searchSlice";
import { SearchSliceType } from "../../types/types";

const Category = () => {
  const dispatch = useDispatch();
  const term = useSelector(
    (state: { searchSlice: SearchSliceType }) => state.searchSlice.term
  );

  const { data } = useQuery(["photos", term], async () => {
    return fetchSearchedData(term);
  });

  useEffect(() => {
    if (data) {
      dispatch(setPhotos(data));
    }
  }, [dispatch, data]);

  return (
    <Box className="gallery">
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2.5rem",
              fontWeigh: "bold",
              textWrap: "balance",
            }}
          >
            Popular <span className="highlight">Categories</span>{" "}
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              marginTop: "15px",
              fontSize: "0.8rem",
              textWrap: "balance",
            }}
          >
            Most searched categories
          </Typography>
        </Box>

        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          marginTop="70px"
          sx={{
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {categoryData.map((cat) => (
            <NavLink to={"/gallery"}>
              <Card
                key={cat.id}
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  cursor: "pointer",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    scale: "1.1",
                  },
                }}
                onClick={() => dispatch(searchTerm(cat.title))}
              >
                <CardMedia
                  sx={{
                    width: { xs: 190, sm: 250 },
                    height: 250,
                    borderRadius: "15px",
                  }}
                  image={cat.image}
                  title={cat.title}
                />

                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", color: "#fff" }}
                >
                  {cat.title}
                </Typography>
              </Card>
            </NavLink>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Category;
