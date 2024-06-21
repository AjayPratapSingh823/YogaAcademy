import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
// import StoreProvider from './redux-cart-logic/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <App />
  </React.StrictMode>,
)
