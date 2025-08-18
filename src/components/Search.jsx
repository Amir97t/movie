export default function Search() {
  return (
    <div className="flex flex-col text-[#EBEEF5] gap-4 w-[588px]">
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
    </div>
  );
}
