import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { CartContext } from './context/cart.context';
import { SiteThemeContext } from './context/sitetheme.context';
import ProductItem from './models/Product';
import SiteTheme from './models/SiteTheme';
import { AppRoutes } from './router/AppRoutes';

function App() {
  const [cart, setCart] = useState<ProductItem[]>([]);
  const value = { cart, setCart };

  const [sitetheme, setSitetheme] = useState<SiteTheme>(new SiteTheme(''));
  const themevalue = { sitetheme, setSitetheme};
  return (
    <CartContext.Provider value={value}>
    <SiteThemeContext.Provider value={themevalue}>
      <Router>
        <AppRoutes></AppRoutes>
      </Router>
    </SiteThemeContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
