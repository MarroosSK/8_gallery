import { Photo } from "../../types/types";
import "./GalleryItem.css";
import ModalComponent from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";

const GalleryItem = ({ photo }: { photo: Photo }) => {
  const { open, handleCloseModal, handleOpenModal } = useModal();

  return (
    <>
      <div className="grid_item" key={photo.id}>
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          onClick={handleOpenModal}
        />
      </div>

      <ModalComponent
        open={open}
        imageUrl={photo.urls.regular}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default GalleryItem;
