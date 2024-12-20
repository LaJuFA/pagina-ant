import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReproductorCaminos from './components/ReproductorCaminos.jsx'
import ReproductorLove from './components/ReproductorLove.jsx'
import ReproductorDocumental from './components/ReproductorDocumental.jsx'
import Nosotros from './components/Nosotros.jsx'

const router = createBrowserRouter([
  {
    path: '/pagina-ant/',
    element: <App/>,
  },
  {
        path:'/pagina-ant/ReproductorCaminos',
        element: <ReproductorCaminos/>
  },
  {
        path:'/pagina-ant/ReproductorLove',
        element: <ReproductorLove/>
  },
  {
        path:'/pagina-ant/ReproductorDocumental',
        element: <ReproductorDocumental/>
  },
  {
        path:'/pagina-ant/Nosotros',
        element: <Nosotros/>
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
