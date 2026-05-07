import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    hydrateFallbackElement:<div>Iniciando el sistema</div>, 
    children: [
      {
        index: true,
        lazy: async() => {
          return { Component: (await( import('./pages/Inicio.tsx')))
            .default }
        }
      },
      {
        path: "inversiones",
        lazy: async() => 
          ({Component: (await import('./pages/Inversiones.tsx')).default})
      },
      {
        path: "oficinas",
        lazy: async() => 
          ({Component: (await import('./pages/oficinas/')).default})
      },
      {
        path: "proveedores",
        lazy: async() => 
          ({Component: (await import('./pages/Proveedores.tsx')).default})
      },
      {
        path: "empleados",
        lazy: async() => 
          ({Component: (await import('./pages/Empleados.tsx')).default})
      },
      {
        path: "tienda",
        lazy: async() => 
          ({Component: (await import('./pages/Tienda.tsx')).default})
      },
      {
        path: "login",
        lazy: async() => 
          ({Component: (await import('./pages/Login.tsx')).default})
      },
      {
        path: "carrito",
        lazy: async() => 
          ({Component: (await import('./pages/Carrito.tsx')).default})
      }  
    ]
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = { router } />
  </StrictMode>,
)
