import { Button } from "flowbite-react";
import { Link } from "react-router";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { useRouteError } from "react-router";

export default function ErroPage() {
  const error = useRouteError();

  return (
    <div className="bg-[#121829]  h-svh max-w-[1440px]  mx-auto">
      <div>
        <Navbar fluid className=" bg-[#161d31]">
          <NavbarBrand href="#">
            <span className=" ml-20 whitespace-nowrap text-xl font-semibold">
              <img src="../src/assets/movieLogo.svg" className="h-6 sm:h-9" />
            </span>
          </NavbarBrand>
          <NavbarCollapse className="flex mr-20 justify-center ">
            <NavbarLink className="text-white" as={Link} to="/">
              Home
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
        <div className="bg-[#121829] mt-15 text-white grid place-items-center gap-4">
          <img src="src/assets/error.svg" className="w-[400px] h-[320px]" />
          <h2 className="font-[Poppins]  text-5xl">Lost you'r way?</h2>
          {error && (
            <p className="text-[#8E95A9]">
              {error.status}{" "}
              <span className="font-bold">{error.statusText}</span>
              --- Oops! This is awkward. You are looking for something that
              doesn't actually exist.
            </p>
          )}
          <p>{error && error.error && error.error.message}</p>
          <Button
            className="bg-[#7B6EF6] w-[100px] h-[46px]"
            as={Link}
            to={"/"}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
