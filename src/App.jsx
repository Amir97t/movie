import Navbar from "./components/NavBar";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-[1440px] mx-auto ">
        <div className="mx-20">
          <Navbar />
          <main >
            <Main />
          </main>
          <div >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
