import { useEffect } from "react";
import { useQuery } from "react-query";
import { InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { alpha } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { searchTerm, setPhotos } from "../../features/searchSlice";
import { SearchSliceType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { fetchSearchedData } from "../../api/fetchSearchedData";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const term = useSelector(
    (state: { searchSlice: SearchSliceType }) => state.searchSlice.term
  );

  const { data } = useQuery(["photos", term], async () => {
    return fetchSearchedData(term);
  });

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchTerm(e.target.value));
    navigate("/gallery");
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
        borderRadius: "15px",
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
        marginBottom: { xs: "20px", sm: 0 },
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
