import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";

export default function AppBar() {
  return (
    <Navbar fluid rounded className="bg-[#121829CC] ">
      <NavbarBrand href="#">
        <span className=" whitespace-nowrap text-xl font-semibold">
          <img src="../src/assets/movieLogo.svg" className="h-6 sm:h-9" />
        </span>
      </NavbarBrand>
      <NavbarCollapse className="flex justify-between ">
        <NavbarLink className="text-white" href="#">
          Movies
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          TV Shows
        </NavbarLink>
        <NavbarLink className="flex text-white gap-2" href="#">
          Suggest me <img src="../src/assets/arrow-right.svg" />
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
