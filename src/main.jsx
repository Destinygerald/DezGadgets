import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import './index.css'
import loggerReducer from "./Features/Logger"
import sliderReducer from "./Features/Slider"
import cartReducer from "./Features/CartSlider"
import cartItems from "./Features/Cart"
import favoriteReducer from "./Features/Favorites"

const client = new QueryClient()
const store = configureStore({
  reducer: {
    logger: loggerReducer,
    slider: sliderReducer,
    cart: cartReducer,
    cartItems: cartItems,
    favorites: favoriteReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
