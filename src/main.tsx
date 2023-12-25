import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const container = document.getElementById('root')
ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
