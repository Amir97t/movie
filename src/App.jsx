import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-[1440px] mx-auto">
      <div className="mx-20">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
export default App;
