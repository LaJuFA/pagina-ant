import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ReproductorCaminos from './components/ReproductorCaminos.jsx'

const Layout = () => {
  return (
    <Outlet/>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
      path:'/',
      element: <App/>
      },
      {
        path:'/ReproductorCaminos',
        element: <ReproductorCaminos/>
        },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
