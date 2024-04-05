"use client";
import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme("dark");

  const handleChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div>
      <button onClick={handleChange}>
        {theme === "dark" ? (
          <IoSunnyOutline size={20} />
        ) : (
          <IoMoonOutline size={20} />
        )}
      </button>
    </div>
  );
}
