import { Modal, Box, Badge } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css";

const ModalComponent = ({
  open,
  imageUrl,
  handleCloseModal,
}: {
  open: boolean;
  imageUrl: string;
  handleCloseModal: () => void;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      sx={{
        // Custom styles for the modal backdrop
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge
            badgeContent={<CloseIcon sx={{ fontSize: "4rem" }} />}
            sx={{
              position: "fixed",
              top: 20,
              right: 25,
              cursor: "pointer",
              zIndex: 1,
              color: "#fff",
              backgroundColor: "#000",
            }}
            onClick={handleCloseModal}
          />
          <img
            src={imageUrl}
            alt=""
            style={{
              alignSelf: "center",
            }}
            className="modal_img"
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
