import App from "../App";
import { ThemeProvider } from "flowbite-react";
import customThme from "../theme/index";

export default function Root() {
  return (
    <ThemeProvider theme={customThme}>
      <App />;
    </ThemeProvider>
  );
}
