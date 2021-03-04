import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/main.css'
import App from './App';
import {ProductsContextProvider} from "./context/products-context";
import {CartContextProvider} from "./context/cart-context";

ReactDOM.render(
  <ProductsContextProvider>
    <CartContextProvider>
      <App/>
    </CartContextProvider>
  </ProductsContextProvider>
  ,
  document.getElementById('root')
);
