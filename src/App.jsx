// import Home from "./components/Home";
import AppBar from "./components/AppBar";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="bg-[#121829]  h-screen max-w-[1440px]  mx-auto">
        <div className="mx-20">
          <AppBar />
          <Search />
        </div>
      </div>
    </>
  );
}

export default App;
