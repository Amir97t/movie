import { Button } from "flowbite-react";
import { Link } from "react-router";
import NavBar from "../components/NavBar";
import { useRouteError } from "react-router";
import { motion } from "framer-motion";

export default function ErroPage() {
  const error = useRouteError();

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
          <img src="src/assets/error.svg" className="w-[400px] h-[320px]" />
          <h2 className="font-[Poppins] text-5xl">Lost you'r way?</h2>
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
    </motion.div>
  );
}
