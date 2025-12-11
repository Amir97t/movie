export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        en: ["Poppins", "sans-serif"],
        fa: ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
