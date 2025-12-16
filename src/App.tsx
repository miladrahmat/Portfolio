import HomePage from './components/HomePage'
import ProjectDetails from './components/ProjectDetails'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/projects/:id',
    element: <ProjectDetails />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
