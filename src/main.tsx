import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, //No refetch cuando vuelves a la pestaña
      staleTime: 1000 * 60 * 5, //5 minutos
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    hydrateFallbackElement: <div>Iniciando el sistema</div>,
    children: [
      {
        index: true,
        lazy: async () => {
          return { Component: (await import("./pages/Inicio.tsx")).default };
        },
      },
      {
        path: "inversiones",
        lazy: async () => ({
          Component: (await import("./pages/Inversiones.tsx")).default,
        }),
      },
      {
        path: "oficinas",
        lazy: async () => ({
          Component: (await import("./pages/oficinas/")).default,
        }),
      },
      {
        path: "proveedores",
        lazy: async () => ({
          Component: (await import("./pages/proveedores/index.tsx")).default,
        }),
      },
      {
        path: "empleados",
        lazy: async () => ({
          Component: (await import("./pages/empleados/index.tsx")).default,
        }),
      },
      {
        path: "tienda",
        lazy: async () => ({
          Component: (await import("./pages/tienda/index.tsx")).default,
        }),
      },
      {
        path: "login",
        lazy: async () => ({
          Component: (await import("./pages/Login.tsx")).default,
        }),
      },
      {
        path: "carrito",
        lazy: async () => ({
          Component: (await import("./pages/Carrito.tsx")).default,
        }),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
