import { Link } from "react-router";
import { Button } from "flowbite-react";

export default function Search() {
  return (
    <div className="text-[#EBEEF5]">
      <div className="flex flex-col text-[#EBEEF5] gap-5 w-[588px] mt-[60px]">
        <h1 className="text-[64px]">MailHereko</h1>
        <p className="text-[16px] font-normal ">
          List of movies and TV Shows, I, Pramod Poudel have watched till date.
          Explore what I have watched and also feel free to make a suggestion.
          😉
        </p>
        <div>
          <img src="src/assets/searchIcon.svg" className="absolute mt-5 ml-2" />
          <input
            type="text"
            placeholder="Search Movies or TV Shows"
            className="w-[344px] h-[64px] p-2  text-center rounded-lg bg-[#1c2236] text-white border
               border-gray-600 "
          />
        </div>
        <Button
          className="bg-[#7B6EF6] w-[100px] h-[46px] mt-2"
          as={Link}
          to="genres"
        >
          Genres
        </Button>
      </div>
    </div>
  );
}
