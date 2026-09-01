import { createContext, useEffect, useState } from "react";

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{ theme: Theme, toggleTheme: () => void; }>({
  theme: 'dark',
  toggleTheme: () => { },
}
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {

  const [theme, setTheme] = useState<Theme>(() => {

    const saved = localStorage.getItem('theme') as Theme;

    if (saved) {
      return saved;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';

  });

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);

  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};