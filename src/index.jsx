import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Home } from './templates/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route to="*" component={Home} />
      </Switch>
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>,
);
