import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './index.css';
import { CartContext } from './context/cart.context';
import { SiteThemeContext } from './context/sitetheme.context';
import ProductItem from './models/Product';
import SiteTheme from './models/SiteTheme';
import { AppRoutes } from './router/AppRoutes';
import{ThemeProvider} from "styled-components";
import {GlobalStyles} from "./components/GlobalStyles";
import {lightTheme, darkTheme} from "./components/Themes";

function App() {
  const [cart, setCart] = useState<ProductItem[]>([]);
  const value = { cart, setCart };

  const [sitetheme, setSitetheme] = useState<SiteTheme>(new SiteTheme(''));
  const themevalue = { sitetheme, setSitetheme};

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <button onClick={themeToggler}>Switch Theme</button>
    <CartContext.Provider value={value}>
    <SiteThemeContext.Provider value={themevalue}>
      <Router>
        <AppRoutes></AppRoutes>
      </Router>
    </SiteThemeContext.Provider>
    </CartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
