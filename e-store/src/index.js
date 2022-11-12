import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider}  from "@chakra-ui/react"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import  AuthaCartDataprovider from "./Component/ContextAPI/Authcartdata"
import AuthaCartData from "./Component/ContextAPI/AuthTableData"  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <ChakraProvider >
    <BrowserRouter>
    <AuthaCartDataprovider>
      <AuthaCartData>
    <App />
      </AuthaCartData>
    </AuthaCartDataprovider>
    </BrowserRouter>
    </ChakraProvider >
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
