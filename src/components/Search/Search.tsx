import { useEffect } from "react";
import { useQuery } from "react-query";
import { InputBase, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { searchTerm, setPhotos } from "../../features/searchSlice";
import { SearchSliceType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { fetchSearchedData } from "../../api/fetchSearchedData";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const term = useSelector(
    (state: { searchSlice: SearchSliceType }) => state.searchSlice.term
  );

  const { data } = useQuery(["photos", term], async () => {
    return fetchSearchedData(term);
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/gallery");
  };
  const handleTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchTerm(e.target.value));
  };

  useEffect(() => {
    if (data) {
      dispatch(setPhotos(data));
    }
  }, [dispatch, data]);

  return (
    <form onSubmit={handleSearch}>
      <Stack
        spacing={1}
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          borderRadius: "15px",
          backgroundColor: alpha("#0000FF", 0.15),
          "&:hover": {
            backgroundColor: alpha("#0000FF", 0.45),
          },
          "&:focus-within": {
            backgroundColor: alpha("#0000FF", 0.25),
            width: { xs: "300px", sm: "500px" },
          },
          width: { xs: "220px", sm: "300px" },
          height: "40px",
          transition: "width 0.3s ease-in-out",
          marginTop: "30px",
        }}
      >
        <InputBase
          sx={{
            color: "#fff",
            ml: 2,
          }}
          placeholder="Search..."
          value={term}
          onChange={handleTerm}
        />
      </Stack>
      <div className="searchBox">
        <button className="search-btn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
