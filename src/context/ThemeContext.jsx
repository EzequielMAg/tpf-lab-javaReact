import { createContext, useContext, useState } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Custom Hook para acceder al contexto
export const useTheme = () => useContext(ThemeContext);

// Proveedor del contexto del tema
const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;