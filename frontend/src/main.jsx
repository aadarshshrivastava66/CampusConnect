import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NoticeList from './components/NoticeList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <>
  <h1>Welcome</h1>
  
 <NoticeList/>
  </>
  </StrictMode>,
)
