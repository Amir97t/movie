import AppBar from "./AppBar";
import Search from "./Search";

export default function Home() {
  return (
    <div className="bg-[#121829]  h-screen max-w-[1440px]  mx-auto">
      <div className="mx-20">
        <AppBar />
        <Search />
      </div>
    </div>
  );
}
