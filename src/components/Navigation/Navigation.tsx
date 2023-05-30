import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { alpha } from "@mui/material/styles";
import NavigationLinks from "./NavigationLinks";
import Navigation_mobile from "./Navigation_mobile";
import { useDispatch, useSelector } from "react-redux";
import { NavigationSliceType } from "../../types/types";
import { Search } from "..";
import { toggleNav } from "../../features/navigationSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: { navigationSlice: NavigationSliceType }) =>
      state.navigationSlice?.isOpen
  );
  // const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState<boolean>(false)
  console.log(isOpen);

  return (
    <Box>
      <AppBar position="relative" sx={{ backgroundColor: alpha("#000", 0.8) }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none",
              },
            }}
            onClick={() => dispatch(toggleNav(!isOpen))}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            ImageGallery
          </Typography>
          <NavigationLinks />
          <Search />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={() => dispatch(toggleNav(!isOpen))}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <Navigation_mobile />
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navigation;
