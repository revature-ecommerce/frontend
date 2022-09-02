import React from 'react';
import SiteTheme from '../models/SiteTheme';

interface SiteThemeState{
    sitetheme: SiteTheme;
    setSitetheme: (sitetheme:SiteTheme)=>void;
}
export const SiteThemeContext = React.createContext<SiteThemeState>({
    sitetheme: new SiteTheme(''),
    setSitetheme: () => {}
});