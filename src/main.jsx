import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./routes/root.jsx";
import Home, { HomeLoader } from "./routes/home.jsx";
import Genres from "./routes/genres.jsx";
import ErroPage from "./routes/error.jsx";
import MoviebyGenre, { MovieByGenreLoader } from "./routes/movieByGenre.jsx";
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
        path: "genres",
        Component: Genres,
        children: [
          {
            path: ":genre",
            Component: MoviebyGenre,
            loader: MovieByGenreLoader,
          },
        ],
      },
      {
        path: "movies/:id",
        Component: MoviePage,
        loader: MovieLoader,
      },
    ],
  },

  // { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
