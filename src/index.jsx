import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
