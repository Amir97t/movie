import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./routes/root.jsx";
import Genres from "./routes/genres.jsx";
import ErroPage from "./routes/error.jsx";
import MoviebyGenre, { MovieByGenreLoader } from "./routes/movieByGenre.jsx";
// import { useParams } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErroPage />,
    children: [
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
    ],
  },

  // { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
