
import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './Pages/HomePage.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import NotFound from './Pages/NotFound.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import CourseList from './Pages/Course/CourseList.jsx'
import Contact from './Pages/Contact.jsx'
import Denied from './Pages/Denied.jsx'
import CourseDescription from './Pages/Course/CourseDescription.jsx'
import RequiredAuth from './Components/Auth/RequireAuth.jsx'
import CreateCourse from './Pages/Course/CreateCourse.jsx'
import Profile from './Pages/User/Profile.jsx'

function App() {
  

  return (
   <>
   <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/denied' element={<Denied />} />
      <Route path='/courses' element={<CourseList />} />
      <Route path='/courses/description' element={<CourseDescription />} />
      <Route path='/courses/create' element={<CreateCourse />} />

      {/* <Route element={<RequiredAuth allowedRoles={["ADMIN"]} />}>
          <Route path='/courses/create' element={<CreateCourse />} />
      </Route> */}
      <Route element={<RequiredAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
      </Route>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
   </Routes>
   </>
  )
}

export default App
