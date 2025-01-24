import type { MetaFunction } from "@remix-run/node";
import About from "~/components/about";
import Header from "~/components/header";
import Stack from "~/components/stack";
import { ThemeProviderClient, useThemeContext } from "~/context/themeContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Harth Portfolio" },
    { name: "Harth Pama Palaras", content: "This me! Harth Pama Palaras" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ];
};

export default function Index() {
  const { theme } = useThemeContext()

  return (
    <>
      <ThemeProviderClient />
      <div className={`flex flex-col overflow-x-hidden ${theme} fira-code`}>
        <Header />
        <About />
        <Stack />
      </div>

    </>
  )
}


