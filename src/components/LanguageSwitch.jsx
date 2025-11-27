import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex gap-2 hover:cursor-pointer bg-gray-200 dark:bg-gray-700 px-3 py-1.5 rounded-full shadow-sm transition hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      <div
        className={`w-5 h-5 rounded-full  transition-all duration-300 ${
          i18n.language === "fa"
            ? "bg-green-600  translate-x-18"
            : "bg-blue-600"
        }`}
      ></div>
      <span className="text-sm font-medium  px-2 mr-4 text-white">
        {i18n.language === "fa" ? "فارسی" : "English"}
      </span>
    </button>
  );
}
