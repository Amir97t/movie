import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./routes/root.jsx";
import Home, { HomeLoader } from "./routes/home.jsx";
import ErroPage from "./routes/error.jsx";
import MovieByGenre, { MovieByGenreLoader } from "./routes/movieByGenre.jsx";
import MoviePage, { MovieLoader } from "./routes/movie.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErroPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: HomeLoader,
      },
      {
        path: "all",
        Component: Home,
        loader: HomeLoader,
      },
      {
        path: "genres/:genre",
        Component: MovieByGenre,
        loader: MovieByGenreLoader,
      },
    ],
  },
  {
    path: "movies/:id",
    Component: MoviePage,
    loader: MovieLoader,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
