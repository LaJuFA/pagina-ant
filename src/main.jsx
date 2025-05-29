import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReproductorCaminos from './components/ReproductorCaminos.jsx'
import ReproductorLove from './components/ReproductorLove.jsx'
import ReproductorDocumental from './components/ReproductorDocumental.jsx'
import Nosotros from './components/Nosotros.jsx'
import Alquiler from './components/Alquiler.jsx'
import Contacto from './components/Contacto.jsx'
import Proyectos from './components/Proyectos.jsx'

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
  {
        path:'/pagina-ant/Alquiler',
        element: <Alquiler/>
  },
  {
      path:'/pagina-ant/Contacto',
      element: <Contacto/>
  },
  {
      path:'/pagina-ant/Proyectos',
      element: <Proyectos/>
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
