import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NoticeList from './components/NoticeList'
import Header from './components/Header'

import Footer from './components/Footer'
import HomePage from './Pages/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <>

  
 <Header/>
 <HomePage/>
 <Footer/>
  </>
  </StrictMode>,
)
