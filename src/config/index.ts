export const CONFIG = {
  API_URL: import.meta.env.VITE_API_BASE_URL,
  ENV: import.meta.env.VITE_ENVIRONMENT,

  ENDPOINTS: {
    ENVIOS: "/envios.php",
    OFICINAS: "/oficinas.php",
    PROVEEDORES: "/proveedores.php",
    EMPLEADOS: "/empleados.php",
  },

  VERSION: "1.0.0",
} as const;
