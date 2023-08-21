import { useState, useEffect } from "react";
import { Photo } from "../../types/types";
import "./GalleryItem.css";
import ModalComponent from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { fetchPhotoDetails } from "../../api/fetchSearchedData";

const GalleryItem = ({ photo }: { photo: Photo }) => {
  const { open, handleCloseModal, handleOpenModal } = useModal();
  const [singlePhoto, setSinglePhoto] = useState(null);

  useEffect(() => {
    const fetchSinglePhotoDetails = async () => {
      const newPhoto = await fetchPhotoDetails(photo.id);
      setSinglePhoto(newPhoto);
    };

    if (open) {
      fetchSinglePhotoDetails();
    }
  }, [open, photo.id]);

  return (
    <>
      <div className="grid_item" key={photo.id}>
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          onClick={handleOpenModal}
        />
      </div>

      {singlePhoto && (
        <ModalComponent
          singlePhoto={singlePhoto}
          open={open}
          imageUrl={photo.urls.regular}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default GalleryItem;
