import { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { alpha } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { searchTerm, setPhotos } from "../../features/searchSlice";
import { SearchSliceType } from "../../types/types";

const Search = () => {
  const dispatch = useDispatch();
  const term = useSelector(
    (state: { searchSlice: SearchSliceType }) => state.searchSlice.term
  );
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { data } = useQuery(["photos", term], async () => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${term}&orientation=portrait&client_id=${API_KEY}&per_page=15&page=1&height=300`
    );
    return response.data.results;
  });

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchTerm(e.target.value));
  };

  useEffect(() => {
    if (data) {
      dispatch(setPhotos(data));
    }
  }, [dispatch, data]);

  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: alpha("#fff", 0.15),
        "&:hover": {
          backgroundColor: alpha("#fff", 0.45),
        },
        "&:focus-within": {
          backgroundColor: alpha("#fff", 0.25),
          width: "230px",
        },
        width: "170px",
        transition: "width 0.3s ease-in-out",
      }}
    >
      <SearchIcon sx={{ ml: 1 }} />
      <InputBase
        sx={{
          color: "white",
        }}
        placeholder="Search..."
        value={term}
        onChange={handleSearchTerm}
      />
    </Stack>
  );
};

export default Search;
