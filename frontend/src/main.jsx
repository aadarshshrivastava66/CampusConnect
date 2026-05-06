import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticeList from './components/NoticeList'
import Header from './components/Header'

import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import About from './components/About'
import Contact from './components/Contact'
import ViewNotice from './components/ViewNotice';

createRoot(document.getElementById('root')).render(
     <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/mycollege/notice"
          element={<NoticeList />}
        />

        <Route
          path="/view-notice/:id"
          element={<ViewNotice/>}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
)
