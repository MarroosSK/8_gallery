import { Box, Typography } from "@mui/material";
import { detailsList } from "../../utils/data";
import "./Details.css";

const DetailsList = () => {
  return (
    <Box className="container">
      {detailsList.map((oneDetail) => (
        <Box
          className="details__wrapper"
          display="flex"
          alignItems="center"
          gap="20px"
          sx={{ paddingTop: "20px" }}
          key={oneDetail.id}
        >
          <Box
            sx={{
              backgroundColor: "#D0E7FC",
              width: "45px",
              heigh: "65px",
              padding: "10px",
              alignSelf: "center",
              borderRadius: "20%",
            }}
          >
            {oneDetail.icon}
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="start">
            <Typography
              sx={{
                textAlign: "left",
                color: "#374957",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              {oneDetail.title}
            </Typography>
            <Typography
              sx={{
                color: "#374957",
                textAlign: "left",
                fontSize: "0.8rem",
                marginTop: "10px",
              }}
            >
              {oneDetail.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DetailsList;
