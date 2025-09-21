import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/index'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
