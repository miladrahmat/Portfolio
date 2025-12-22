import HomePage from './components/HomePage'
import ProjectDetails from './components/ProjectDetails'
import NotFound from './components/NotFound'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />
  },
  {
    path: '/projects/:id',
    element: <ProjectDetails />,
    errorElement: <NotFound />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
