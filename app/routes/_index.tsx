import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import About from "~/components/about";
import Header from "~/components/header";
import useThemeContext from "~/context/themeContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Harth Portfolio" },
    { name: "Harth Pama Palaras", content: "This me! Harth Pama Palaras" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ];
};

export default function Index() {
  const { theme, setTheme } = useThemeContext()
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
      setMounted(true);

      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
          setTheme(savedTheme);
      }
  }, [setTheme]);

  if (!mounted) {
      return null;
  }

  return (
    <>
      <div className={`flex flex-col overflow-x-hidden ${theme}`}>
        <Header />
        <About />
      </div>

    </>
  )
}


