import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticeList from './components/NoticeList'
import Header from './components/Header'
import { AuthProvider } from './context/AuthContext';
import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import About from './components/About'
import Contact from './components/Contact'
import ViewNotice from './components/ViewNotice';
import Programs from './components/Programs';
import Chatbot from './components/Chatbot';

import Enquiry from './components/Enquary';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import File from './components/File';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
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

       

        <Route path="/mycollege/programs/:type" element={<Programs/>} />
        <Route path="/mycollege/contact" element={<Contact/>} />
        <Route path="/mycollege/about" element={<About/>} />
        <Route path="/mycollege" element={<HomePage/>} />
        <Route path="/mycollege/chat" element={<Chatbot/>} />
        <Route path="/mycollege/enquiry" element={<Enquiry/>} />
        <Route path="/mycollege/register" element={<Register/>} />
        <Route path="/mycollege/login" element={<Login/>} />
          <Route
          path="/dashboard"
          element={<Dashboard/>}
        />
        <Route path="/mycollege/uploadNotice" element={<File/>} />

      </Routes>

      <Footer />

    </BrowserRouter>
    </AuthProvider>
)
