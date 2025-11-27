import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

export default function AppBar() {
  const { t, i18n } = useTranslation();

  return (
    <Navbar className="bg-[#00000033] font-[Poppins] w-full rounded-lg backdrop-blur-md">
      <NavbarBrand>
        <Link to="/">
          <img
            src="../src/assets/icon-tab.svg"
            className="h-6 sm:h-8 md:h-9"
            alt="Logo"
          />
        </Link>
        <LanguageSwitch as={Link} to="" />
      </NavbarBrand>
      <NavbarToggle className="text-[#7B6EF6] hover:cursor-pointer hover:bg-[#ffffff22]" />
      <NavbarCollapse className="text-center md:text-left">
        <NavbarLink
          className={`text-white hover:cursor-pointer hover:text-[#7B6EF6] ${
            i18n.language === "fa" ? "text-[15px]" : ""
          }`}
          as={Link}
          to="random"
        >
          {t("home.nav_random")}
        </NavbarLink>

        <NavbarLink
          className={`text-white hover:cursor-pointer hover:text-[#7B6EF6] ${
            i18n.language === "fa" ? "text-[15px]" : ""
          }`}
          href="#"
        >
          {t("home.nav_middle")}
        </NavbarLink>

        <NavbarLink
          className={`flex justify-center md:justify-start text-white gap-2 hover:text-[#7B6EF6] hover:cursor-pointer ${
            i18n.language === "fa" ? "text-base" : ""
          }`}
          as={Link}
          to="/"
        >
          {t("home.nav_home")}
          <img src="../src/assets/arrow-right.svg" alt="arrow" />
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
