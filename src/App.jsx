import Navbar from "./components/NavBar";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-[1440px] mx-auto bg-[url('/src/assets/Background.svg')] ">
        <div className="mx-20">
          <Navbar />
          <main className="flex ">
            <Main />
          </main>
          <div className="p-4 min-h-screen  text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
