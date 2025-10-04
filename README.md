# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🎬 Movie Explorer

A modern web application to explore and search movies & TV shows, built with React, React Router, TailwindCSS, and Framer Motion.
This project uses the public API "moviesapi.codingfront.dev" to fetch data.
T

✨ Features
🔎 Search movies & series with error handling if nothing is found.
🎭 Filter by genre (Action, Drama, Comedy, etc.).
🎞️ All Movies list (with a default “All” category).
♾️ Infinite scroll support for long lists.
🎨 Smooth animations with Framer Motion.
📱 Responsive design powered by TailwindCSS and Flowbite.
💡 Skeleton loaders for better UX while fetching data.

🛠️ Tech Stack
⚛️ React
🎨 TailwindCSS
🎥 Framer Motion
📡 Axios for API requests
🎭 Flowbite-React for UI components

🚀 Getting Started

1. Clone the repository
   `git clone"https://github.com/Amir97t/movie.git"
cd movie`

2) Install dependencies
   "npm install" - "npm install tailwindcss @tailwindcss/vite" then follow configuration path on "https://tailwindcss.com/docs/installation/using-vite"

   "npx -y npm install flowbite-react" to install flowbite-react.

   "npm install motion" to install framer-motion.
   add `"no-unused-vars": ["warn", { "varsIgnorePattern": "motion" }],` to "eslint.config.js" to get rid of unwanted errors.

3) Start the development server "npm run dev"
   Your app will be running at:
   👉 http://localhost:5173

👨‍💻 Author
Developed by AmirTaghizadeh
Github"Amir97t"

src/
├── api/ # API functions
│ ├── getAllMovies.js
│ ├── getMoviesByGenre.js
│ └── getMovieBySearch.js
│
├── components/ # Reusable UI components
│ ├── NavBar.jsx
│ ├── GenreList.jsx
│ ├── MovieCard.jsx
│ ├── MovieList.jsx
│ └── MovieCardSkeleton.jsx
│
├── routes/ # Application routes
│ ├── root.jsx
│ ├── home.jsx
│ └── movieByGenre.jsx
│
├── App.jsx
└── main.jsx
