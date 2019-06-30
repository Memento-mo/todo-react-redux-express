import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyle from './utils/globals';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Fragment>
          <App />
          <GlobalStyle/>
        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
)