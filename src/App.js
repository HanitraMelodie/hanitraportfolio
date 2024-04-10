import React from 'react'
import './App.css'
import './print.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import ErrorPage from './Pages/ErrorPage'
import Layout from './Pages/Layout'
import ContactPage from './Pages/ContactPage'

import CertificationsPage from './Pages/CertificationsPage'
import ProjectPage from './Pages/ProjectPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/projectpage" element={<ProjectPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/certificationspage" element={<CertificationsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
