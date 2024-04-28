import { Routes, Route } from 'react-router-dom'

import { LoginForm } from './pages/login-page'
import { SignupForm } from './pages/signup-page'
import { HomePage } from './pages/home-page'

import './App.css'


export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<div className='flex flex-col items-center justify-center h-screen w-screen'><LoginForm /></div>} />
        <Route path="/signup" element={<div className='flex flex-col items-center justify-center h-screen w-screen'><SignupForm/></div>} />
      </Routes>
  )
}
