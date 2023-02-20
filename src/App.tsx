import { Provider } from 'react-redux';
import React from 'react';


import store from './store';
import {BankPage} from "./pages/BankPage/BankPage";
import {Error} from "./components";


export default (
  <Provider store={store}>
    <Error>
      <BankPage />
    </Error>
  </Provider>
);
