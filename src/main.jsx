import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index.module'
import { CardsProvider } from './context/CardsContext'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardsProvider>
      <Index />
    </CardsProvider>
  </React.StrictMode>,
)
