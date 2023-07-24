import { Box, Typography } from "@mui/material";
import { detailsList } from "../../utils/data";
const DetailsList = () => {
  return (
    <>
      {detailsList.map((oneDetail) => (
        <Box
          display="flex"
          gap="20px"
          sx={{ marginBottom: "10px", paddingTop: "20px" }}
          key={oneDetail.id}
        >
          <Box
            sx={{
              backgroundColor: "#D0E7FC",
              padding: "10px",
              alignSelf: "center",
              borderRadius: "20%",
            }}
          >
            {oneDetail.icon}
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="start">
            <Typography sx={{ textAlign: "left", color: "white" }}>
              {oneDetail.title}
            </Typography>
            <Typography sx={{ color: "inherit", textAlign: "left" }}>
              {oneDetail.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default DetailsList;
