import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import App from './App.jsx'

import './index.css'
import SignUp from './components/SignUp'
import Explore from './components/Explore.jsx'
import Home from './components/Home.jsx'
import LogIn from './components/LogIn.jsx'
import InterviewPrep from './components/InterviewPrep.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    
     <Route path='' element={<Home/>}/>
     <Route path='SignUp' element={<SignUp/>}/>
     <Route path='LogIn' element={<LogIn/>}/>
     <Route path='Explore' element={<Explore/>}/>
     <Route path='InterviewPrep' element={<InterviewPrep/>}/>
     
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
