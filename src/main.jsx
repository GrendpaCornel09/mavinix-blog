import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import LoginPage from './loginPage.jsx'
import SignupPage from './signupPage.jsx'
import HomePage from './homePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
      </Routes>
    </Router>
  </StrictMode>,
);
