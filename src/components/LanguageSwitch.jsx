import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const isFa = i18n.language === "fa";

  const handleToggle = () => {
    const newLang = isFa ? "en" : "fa";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div
      className="relative"
      style={{
        width: "85px",
        height: "35px",
      }}
    >
      <button
        onClick={handleToggle}
        className="absolute  hover:cursor-pointer inset-0 rounded-full bg-slate-200 overflow-hidden"
        style={{
          boxShadow: "0 0 0 transparent",
        }}
      >
        <div
          className={`
            absolute top-1 left-1
            w-8 h-7 rounded-full z-20
            flex items-center justify-center text-white text-sm font-bold
            transition-transform duration-300
            ${
              isFa
                ? "translate-x-11 bg-linear-to-r from-purple-500 to-indigo-600"
                : "translate-x-0 bg-linear-to-r from-blue-500 to-cyan-500"
            }
          `}
          style={{
            boxShadow: "0 2px 5px rgba(0,0,0,0.35)",
          }}
        >
          {isFa ? "فا" : "EN"}
        </div>

        <span
          className={`
            absolute left-3 top-1/2 -translate-y-1/2
            text-sm transition duration-300 z-10
            ${isFa ? "text-slate-500" : "text-black font-bold"}
          `}
        >
          EN
        </span>

        <span
          className={`
            absolute right-3 top-1/2 -translate-y-1/2
            text-sm transition duration-300 z-10
            ${isFa ? "text-black font-bold" : "text-slate-500"}
          `}
        >
          فا
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitch;
