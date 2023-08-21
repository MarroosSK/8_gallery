import { useState, useEffect, useLayoutEffect } from "react";
import { Box, IconButton } from "@mui/material";
import Gallery from "./pages/Gallery/Gallery";
import { Navigation } from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import { useScrollTop } from "./hooks/useScrollTop";
import gallery from "./assets/gallery.png";
import user from "./assets/user.png";

const Layout = () => {
  const { isScrolled } = useScrollTop();
  const [isVisible, setIsVisible] = useState(false);

  //scroll
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isScrolled) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isScrolled]);

  //scrollUp
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll({ top: 0, behavior: "auto" });
  }, [pathname]);
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
      {/* side menu with links */}
      <Box id="scrollToTop__wrapper" className={isVisible ? "active" : ""}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/gallery">
            <IconButton
              sx={{
                background: "transparent",
                flexDirection: "column",
              }}
            >
              <img src={gallery} alt="gallery_icon" width={34} />
            </IconButton>
          </Link>

          <Link to="/profile">
            <IconButton
              sx={{
                background: "transparent",
                flexDirection: "column",
              }}
            >
              <img src={user} alt="profile_icon" width={34} />
            </IconButton>
          </Link>
        </Box>
        <button
          id="scrollToTopButton"
          className={isVisible ? "active" : ""}
          onClick={handleTop}
        >
          &#8593;
        </button>
      </Box>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
