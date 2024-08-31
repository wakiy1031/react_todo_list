import React from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import { UIProvider } from "@yamada-ui/react"
import { App } from "./App"

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </React.StrictMode>,
)
