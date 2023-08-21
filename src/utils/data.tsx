import { v4 as uuid } from "uuid";
import people from "../assets/people.jpg";
import nature from "../assets/nature.jpg";
import animals from "../assets/animals.jpg";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";

export const categoryData = [
  {
    id: uuid(),
    title: "People",
    image: people,
  },
  {
    id: uuid(),
    title: "Nature",
    image: nature,
  },
  {
    id: uuid(),
    title: "Animals",
    image: animals,
  },
];

export const detailsList = [
  {
    id: uuid(),
    icon: <StarBorderPurple500OutlinedIcon />,
    title: "High-quality stock content",
    description:
      "Download scroll-stopping images of the best quality to make your projects look professional.",
  },
  {
    id: uuid(),
    icon: <ThumbUpOffAltOutlinedIcon />,
    title: "Ready-to-use assets",
    description:
      "Access thousands of images and designs ready-to-publish and get your project ready double quick.",
  },
  {
    id: uuid(),
    icon: <SearchOutlinedIcon />,
    title: "Guaranteed search results",
    description:
      "There’s an image and style for every project, whatever your needs are.",
  },
  {
    id: uuid(),
    icon: <SyncOutlinedIcon />,
    title: "Fresh content everyday",
    description:
      "Our library is updated on a daily basis so you can find the newest and trendiest photos and designs.",
  },
];
