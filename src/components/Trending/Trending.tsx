import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import "./Trending.css";
import ModalComponent from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { Photo } from "../../types/types";

const Trending = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [trendingImages, setTrendingImages] = useState([]);
  const { open, setOpen, handleCloseModal } = useModal();
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleOpenModalWithUrl = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setOpen(true);
  };

  useEffect(() => {
    const getTrendingImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos?order_by=popular&full&per_page=10&client_id=${API_KEY}`
        );
        setTrendingImages(response.data);
      } catch (error) {
        console.error("Error fetching trending images:", error);
      }
    };

    getTrendingImages();
  }, [trendingImages, API_KEY]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ minHeight: "100vh", marginTop: "60px" }}
    >
      <Box display="flex">
        <Typography
          sx={{ color: "#374957", fontSize: "22px", fontWeigh: "bold" }}
        >
          <span style={{ color: "#2D58CF", fontWeight: "bold" }}>Explore</span>{" "}
          trending images
        </Typography>
      </Box>

      <Typography
        sx={{ color: "inherit", marginTop: "15px", fontSize: "16px" }}
      >
        Check what's popular and find out more details
      </Typography>

      {/* TRENDY */}
      <div className="grid_gallery">
        {trendingImages.map((image: Photo) => (
          <div
            className="grid_item"
            key={image?.id}
            onClick={() => handleOpenModalWithUrl(image.urls?.regular)}
          >
            <img
              src={image.urls?.regular}
              alt={image?.alt_description}
              style={{ borderRadius: "15px" }}
            />
          </div>
        ))}
      </div>

      <ModalComponent
        open={open}
        imageUrl={selectedImageUrl}
        handleCloseModal={handleCloseModal}
      />
    </Box>
  );
};

export default Trending;
