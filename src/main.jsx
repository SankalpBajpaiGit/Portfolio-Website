import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home/Home.jsx';
import Project from './components/Project/Project.jsx';
import Certification from './components/Certification/Certification.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='project' element={<Project />} />
      <Route path='certification' element={<Certification />} />
      <Route 
      loader={githubInfoLoader}
      path='github'
      element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)