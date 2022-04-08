import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import AuthContextProvider from "./components/store/AuthContextProvider";

ReactDOM.render(
  <AuthContextProvider>
  <App />
  </AuthContextProvider>
  ,document.getElementById('root'));
