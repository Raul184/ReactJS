import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
// Context
import {ProductsProvider} from './context/products';

ReactDOM.render(
  <Router>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </Router> , 
  document.getElementById("root")
);
