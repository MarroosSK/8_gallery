import { Modal, Box, Badge, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavoritesPhotos,
  saveToFavoritePhotos,
} from "../../features/favoriteSlice";
import {
  FavoriteSliceType,
  RelatedPicType,
  SinglePhotoType,
  TagType,
} from "../../types/types";

const ModalComponent = ({
  singlePhoto,
  open,
  imageUrl,
  handleCloseModal,
}: {
  singlePhoto: SinglePhotoType;
  open: boolean;
  imageUrl: string;
  handleCloseModal: () => void;
}) => {
  const dispatch = useDispatch();
  const favoritePhotos = useSelector(
    (state: { favoriteSlice: FavoriteSliceType }) =>
      state.favoriteSlice.favoritePhotos
  );

  const addToFavorites = () => {
    dispatch(saveToFavoritePhotos(singlePhoto));
  };
  const removeFromFavorites = () => {
    dispatch(removeFromFavoritesPhotos(singlePhoto));
  };

  const isFavorite = favoritePhotos.some(
    (photo: SinglePhotoType) => photo.id === singlePhoto.id
  );

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
          marginTop: "30px",
        }}
      >
        <Badge
          className="close_icon"
          badgeContent={<CloseIcon sx={{ fontSize: "4rem" }} />}
          sx={{
            position: "fixed",
            top: 30,
            right: 40,
            cursor: "pointer",
            zIndex: 1,
            color: "#fff",
            backgroundColor: "#000",
          }}
          onClick={handleCloseModal}
        />
        <Box className="modal__box">
          <Box className="modal__box-top">
            <Typography variant="body1" style={{ color: "#869FB2" }}>
              author:{" "}
              <span className="highlight">{singlePhoto?.user?.username}</span>
            </Typography>
            {isFavorite ? (
              <FavoriteIcon onClick={removeFromFavorites} color="error" />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={addToFavorites} />
            )}
          </Box>
          <img
            src={imageUrl}
            alt=""
            style={{
              alignSelf: "center",
            }}
            className="modal_img"
          />
          <Box className="modal__box-bottom">
            <Typography variant="body1" style={{ color: "#869FB2" }}>
              Views : {singlePhoto?.views}
            </Typography>
            <Typography variant="body1" style={{ color: "#869FB2" }}>
              Downloads: {singlePhoto?.downloads}
            </Typography>
            <Typography variant="body1" style={{ color: "#869FB2" }}>
              Likes: {singlePhoto?.likes}
            </Typography>
          </Box>
          <ul className="modal__box-bottom-list">
            {singlePhoto?.tags.map((tag: TagType, index: number) => (
              <li className="modalItem" key={index}>
                {tag.title}
              </li>
            ))}
          </ul>

          <Box className="modal__box-related">
            <Typography variant="h2">From Author</Typography>
            <Box className="modal__box-related-wrapper">
              {singlePhoto?.related_collections.results[0].preview_photos.map(
                (relatedPic: RelatedPicType, index: number) => (
                  <Box className="relatedItem" key={index}>
                    <img src={relatedPic.urls.small} alt="" />
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
