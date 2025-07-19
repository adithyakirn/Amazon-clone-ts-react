import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import MenuContextProvider from './Context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <MenuContextProvider>
    <App />
    </MenuContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
