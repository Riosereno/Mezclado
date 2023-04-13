import { createBrowserRouter } from "react-router-dom";
import About from "./views/About";
import Character from "./views/Character";
import Contact from "./views/Contact";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/character/:characterId",
    element: <Character />,
  },
]);
