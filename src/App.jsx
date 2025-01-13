
import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './Pages/HomePage.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import NotFound from './Pages/NotFound.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import CourseList from './Pages/Course/CourseList.jsx'
import Contact from './Pages/Contact.jsx'

function App() {
  

  return (
   <>
   <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/courses' element={<CourseList />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
   </Routes>
   </>
  )
}

export default App
