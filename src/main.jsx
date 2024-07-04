import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeContextProvider } from './assets/context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
)
