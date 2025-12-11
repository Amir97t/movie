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
import theme from "../theme";

export default function AppBar() {
  const { t, i18n } = useTranslation();
  const isFA = i18n.language === "fa";
  const fontClass = isFA ? "font-fa" : "font-en";
  
  return (
    <Navbar
      theme={theme.navbar}
      className={`bg-[#00000033] ${fontClass} w-full rounded-lg backdrop-blur-md`}
    >
      <span className="flex items-center gap-3">
        <NavbarBrand as={Link} to="/">
          <img
            src="../src/assets/icon-tab.svg"
            className="h-6 sm:h-8 md:h-9"
            alt="Logo"
          />
        </NavbarBrand>
        <LanguageSwitch />
      </span>
      <NavbarToggle className="text-[#7B6EF6] hover:cursor-pointer hover:bg-[#ffffff22]" />
      <NavbarCollapse className="text-center md:text-left">
        <NavbarLink
          className={`text-white hover:cursor-pointer  ${
            i18n.language === "fa" ? "text-[15px]" : ""
          }`}
          as={Link}
          to="/random"
        >
          {t("home.nav_random")}
        </NavbarLink>

        <NavbarLink
          className={`text-white hover:cursor-pointer ${
            i18n.language === "fa" ? "text-[15px]" : ""
          }`}
          href="#"
        >
          {t("home.nav_middle")}
        </NavbarLink>

        <NavbarLink
          className={`flex justify-center md:justify-start text-white gap-2 hover:cursor-pointer ${
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
