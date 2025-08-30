import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <Navbar className="bg-[#00000033] font-[Poppins] w-full">
      <NavbarBrand href="#">
        <img src="../src/assets/icon-tab.svg" className="h-6 sm:h-9" />
      </NavbarBrand>
      <NavbarCollapse>
        <NavbarLink className="text-white" as={Link} to="/all">
          Movies
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          TV Shows
        </NavbarLink>
        <NavbarLink className="flex text-white gap-2" as={Link} to="/">
          Home <img src="../src/assets/arrow-right.svg" />
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
