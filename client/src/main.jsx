import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import ProductContextProvider from './context/productContext'
import CartContextProvider from './context/cartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <App/>
      </CartContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
)
