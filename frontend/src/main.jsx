import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import File from './components/File'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <>
  <h1>Welcome</h1>
  <File/>
  </>
  </StrictMode>,
)
