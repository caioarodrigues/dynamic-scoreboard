import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CardsContextProvider } from './Context/CardsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardsContextProvider>
      <App />
    </CardsContextProvider>
  </React.StrictMode>,
)
