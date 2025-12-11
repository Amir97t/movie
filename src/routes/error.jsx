import { Button } from "flowbite-react";
import { Link } from "react-router";
import NavBar from "../components/NavBar";
import { useRouteError } from "react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ErroPage() {
  const error = useRouteError();
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-svh max-w-[1440px] mx-auto "
    >
      <div className="lg:mx-20 md:mx-15 mx-3">
        <NavBar />
        <div className="items-center text-center mt-15 text-white grid place-items-center gap-4">
          <img src="/icons/error.svg" className="w-[400px] h-80" />
          <h2 className="font-[Poppins] text-5xl">
            {t("errorPage.error_route_title")}
          </h2>
          {error && (
            <p className="text-[#8E95A9]">
              {error.status}{" "}
              <span className="font-bold">{error.statusText}</span>
              {t("errorPage.error_route_message")}
            </p>
          )}
          <p>{error && error.error && error.error.message}</p>
          <Button
            className="bg-[#7B6EF6] w-[100px] h-[46px]"
            as={Link}
            to={"/"}
          >
            {t("errorPage.error_goBack")}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
