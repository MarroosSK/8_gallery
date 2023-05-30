import {
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  Stack,
  Modal,
  Box,
  Badge,
} from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import { Photo } from "../../types/types";
import { useState } from "react";

const GalleryItem = ({ photo }: { photo: Photo }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ImageListItem>
        <img src={photo.urls.thumb} alt="" />
        <ImageListItemBar
          actionIcon={
            <Stack
              spacing={6}
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#fff" }}>
                {photo.description && photo.description.length > 10
                  ? `${photo.description.slice(0, 10)}...`
                  : photo.description}
              </Typography>
              <IconButton
                sx={{ color: "white" }}
                aria-label={`info about ${photo.id}`}
                onClick={handleOpen}
              >
                <FullscreenIcon />
              </IconButton>
            </Stack>
          }
          actionPosition="right"
        />
      </ImageListItem>

      <Modal open={open} onClose={handleClose}>
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
              maxWidth: "30%",
              maxHeight: "50%",
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
              onClick={handleClose}
            />
            <img
              src={photo.urls.full}
              alt=""
              style={{
                alignSelf: "center",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default GalleryItem;
