import { AppBar, Box, Toolbar, Typography, Stack } from "@mui/material";
import { NavigationLinks, Search } from "..";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import Looks5Icon from "@mui/icons-material/Looks5";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Box>
      <AppBar
        elevation={0}
        position="relative"
        sx={{ backgroundColor: "#2D58CF" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            marginTop: { xs: 5, sm: 0 },
            marginBottom: { xs: 5, sm: 0 },
            marginRight: { xs: 0, sm: 10 },
            marginLeft: { xs: 0, sm: 10 },
          }}
        >
          <Link to="/">
            <Box display="flex" sx={{ marginBottom: { xs: "20px", sm: 0 } }}>
              <Typography variant="h6" fontWeight="bold">
                First
              </Typography>
              <Stack direction="row">
                <LooksOneIcon fontSize="small" />
                <Looks5Icon fontSize="small" />
              </Stack>
            </Box>
          </Link>
          <Search />
          <NavigationLinks />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
