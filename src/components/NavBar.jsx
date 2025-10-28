import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <Navbar className="bg-[#00000033] font-[Poppins] w-full rounded-lg backdrop-blur-md">
      <NavbarBrand href="#">
        <img
          src="../src/assets/icon-tab.svg"
          className="h-6 sm:h-8 md:h-9"
          alt="Logo"
        />
      </NavbarBrand>

      <NavbarToggle className="text-[#7B6EF6] hover:cursor-pointer hover:bg-[#ffffff22] " />
      <NavbarCollapse className="text-center  md:text-left">
        <NavbarLink
          className="text-white hover:cursor-pointer hover:text-[#7B6EF6]"
          as={Link}
          to="/all"
        >
          Movies
        </NavbarLink>
        <NavbarLink
          className="text-white hover:cursor-pointer hover:text-[#7B6EF6]"
          href="#"
        >
          TV Shows
        </NavbarLink>
        <NavbarLink
          className="flex justify-center md:justify-start text-white gap-2 hover:text-[#7B6EF6] hover:cursor-pointer"
          as={Link}
          to="/"
        >
          Home <img src="../src/assets/arrow-right.svg" alt="arrow" />
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
