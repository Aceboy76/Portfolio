import { createContext, ReactNode, useContext, useEffect, useState } from "react";



interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);



export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(""); // Explicitly define state type

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  // Make sure context is not undefined
  if (!context) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }
  const { setTheme, theme } = context;
  return { setTheme, theme }
}

export function ThemeProviderClient() {
  const { setTheme } = useThemeContext()

  useEffect(() => {

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  return null
}


