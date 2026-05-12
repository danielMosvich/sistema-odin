import { CONFIG } from "../config";
import type { Empleado } from "../types/Empleado";

// const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.EMPLEADOS}`;

export const fetchEmpleados = async (
  signal?: AbortSignal,
): Promise<Empleado[]> => {
  //! URL TEMPORAL
  const response = await fetch("https://servicios.campus.pe/empleados.php", {
    signal,
  });
  if (!response.ok) {
    throw new Error(
      `Error al obtener empleados: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};
