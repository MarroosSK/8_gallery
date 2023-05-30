import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavigationSliceType } from "../../types/types";
import { toggleNav } from "../../features/navigationSlice";
import { navItems } from "../../helpers/data";
import { searchTerm } from "../../features/searchSlice";

const Navigation_mobile = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: { navigationSlice: NavigationSliceType }) =>
      state.navigationSlice?.isOpen
  );
  return (
    <Box
      onClick={() => dispatch(toggleNav(!isOpen))}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        ImageGallery
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item.title}
                onClick={() => dispatch(searchTerm(item.title))}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navigation_mobile;
